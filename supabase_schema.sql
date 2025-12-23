-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. ENUMS
create type user_role as enum ('admin', 'client');
create type project_status as enum ('pending', 'active', 'completed');
create type task_status as enum ('todo', 'in_progress', 'done');
create type service_status as enum ('active', 'inactive');

-- 2. TABLES

-- Users Table (Extends auth.users)
create table public.users (
  id uuid references auth.users(id) on delete cascade not null primary key,
  email text not null,
  full_name text,
  role user_role default 'client'::user_role,
  created_at timestamptz default now()
);

-- Clients Table
create table public.clients (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  company_name text,
  phone text,
  country text,
  created_at timestamptz default now()
);

-- Services Table (New: Replaces INITIAL_GIGS)
create table public.services (
  id uuid default uuid_generate_v4() primary key,
  category text not null, -- e.g., 'web_dev', 'ecommerce'
  title text not null,
  description text,
  price numeric not null,
  rating numeric default 5.0,
  reviews_count integer default 0,
  features text[], -- Array of strings
  image_url text,
  status service_status default 'active'::service_status,
  created_at timestamptz default now()
);

-- Projects Table (Acts as Orders)
create table public.projects (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references public.clients(id) on delete cascade not null,
  service_id uuid references public.services(id) on delete set null, -- Link to the service purchased
  title text not null,
  description text,
  amount numeric, -- Price at time of purchase
  status project_status default 'pending'::project_status,
  start_date date,
  end_date date,
  created_at timestamptz default now()
);

-- Tasks Table
create table public.tasks (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  title text not null,
  description text,
  status task_status default 'todo'::task_status,
  assigned_to uuid references public.users(id) on delete set null,
  created_at timestamptz default now()
);

-- Files Table
create table public.files (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  file_url text not null,
  uploaded_by uuid references public.users(id) on delete set null,
  created_at timestamptz default now()
);

-- 3. INDEXES
create index idx_users_role on public.users(role);
create index idx_clients_user_id on public.clients(user_id);
create index idx_services_category on public.services(category);
create index idx_projects_client_id on public.projects(client_id);
create index idx_projects_service_id on public.projects(service_id);
create index idx_projects_status on public.projects(status);
create index idx_tasks_project_id on public.tasks(project_id);
create index idx_tasks_assigned_to on public.tasks(assigned_to);

-- 4. ROW LEVEL SECURITY (RLS) & POLICIES

-- Enable RLS
alter table public.users enable row level security;
alter table public.clients enable row level security;
alter table public.services enable row level security;
alter table public.projects enable row level security;
alter table public.tasks enable row level security;
alter table public.files enable row level security;

-- Helper function
create or replace function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.users
    where id = auth.uid() and role = 'admin'
  );
end;
$$ language plpgsql security definer;

-- USERS Policies
create policy "Admins can manage all users" on public.users for all using (public.is_admin());
create policy "Users can read own profile" on public.users for select using (auth.uid() = id);
create policy "Users can update own profile" on public.users for update using (auth.uid() = id);

-- CLIENTS Policies
create policy "Admins can manage all clients" on public.clients for all using (public.is_admin());
create policy "Users can read own client profile" on public.clients for select using (auth.uid() = user_id);
create policy "Users can update own client profile" on public.clients for update using (auth.uid() = user_id);
create policy "Users can insert own client profile" on public.clients for insert with check (auth.uid() = user_id);

-- SERVICES Policies
create policy "Admins can manage services" on public.services for all using (public.is_admin());
create policy "Everyone can read active services" on public.services for select using (status = 'active');

-- PROJECTS Policies
create policy "Admins can manage all projects" on public.projects for all using (public.is_admin());
create policy "Clients can read own projects" on public.projects for select using (
  exists (select 1 from public.clients where clients.id = projects.client_id and clients.user_id = auth.uid())
);
create policy "Clients can insert own projects" on public.projects for insert with check (
  exists (select 1 from public.clients where clients.id = client_id and clients.user_id = auth.uid())
);

-- TASKS Policies
create policy "Admins can manage all tasks" on public.tasks for all using (public.is_admin());
create policy "Clients can read tasks in own projects" on public.tasks for select using (
  exists (select 1 from public.projects join public.clients on projects.client_id = clients.id where projects.id = tasks.project_id and clients.user_id = auth.uid())
);

-- FILES Policies
create policy "Admins can manage all files" on public.files for all using (public.is_admin());
create policy "Clients can read files in own projects" on public.files for select using (
  exists (select 1 from public.projects join public.clients on projects.client_id = clients.id where projects.id = files.project_id and clients.user_id = auth.uid())
);
create policy "Clients can upload files to own projects" on public.files for insert with check (
  exists (select 1 from public.projects join public.clients on projects.client_id = clients.id where projects.id = project_id and clients.user_id = auth.uid())
);

-- 5. TRIGGERS
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, full_name, role)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', 'client');
  
  -- Also create a client profile for them
  insert into public.clients (user_id, company_name)
  values (new.id, new.raw_user_meta_data->>'company_name');
  
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 6. SEED DATA (Optional: Insert initial services)
insert into public.services (category, title, description, price, image_url, features)
values 
('web_dev', 'Business Website (5-7 Pages)', 'Clean, modern, mobile-responsive business website.', 399, 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800', ARRAY['5-7 Pages', 'Mobile Responsive', 'Contact Form', 'SEO Setup']),
('ecommerce', 'Shopify Store Launch', 'Complete Shopify setup with pages, product upload, apps.', 249, 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800', ARRAY['Store Setup', 'Payment Gateway', 'Theme Install', '10 Products']),
('custom_dev', 'SaaS MVP / CRM Dashboard', 'Fully custom web application with authentication and database.', 1500, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', ARRAY['React/Next.js', 'Database Setup', 'Auth System', 'Admin Dashboard']);
