import React from 'react';
import { 
  Globe, ShoppingCart, Code2, PenTool, Cpu, Database, Wrench, Share2 
} from 'lucide-react';
import { Category, Gig, Order, Task } from './types';

export const CATEGORIES: Category[] = [
  { id: 'web_dev', label: 'Website Development', icon: <Globe size={32} />, desc: 'Business websites, redesigns, and performance.' },
  { id: 'ecommerce', label: 'E-Commerce Solutions', icon: <ShoppingCart size={32} />, desc: 'Shopify, WooCommerce, and dropshipping stores.' },
  { id: 'custom_dev', label: 'Custom Web & App', icon: <Code2 size={32} />, desc: 'SaaS MVPs, Mobile Apps, and Custom APIs.' },
  { id: 'branding', label: 'Branding & UI/UX', icon: <PenTool size={32} />, desc: 'Logos, identity kits, and Figma designs.' },
  { id: 'ai_auto', label: 'AI & Automation', icon: <Cpu size={32} />, desc: 'Chatbots, Zapier workflows, and custom models.' },
  { id: 'crm_api', label: 'CRM & Integrations', icon: <Database size={32} />, desc: 'Salesforce, HubSpot, and complex syncs.' },
  { id: 'maintenance', label: 'Maintenance & Support', icon: <Wrench size={32} />, desc: 'Monthly updates, security, and retainers.' },
  { id: 'marketing', label: 'Digital Marketing', icon: <Share2 size={32} />, desc: 'Social creatives, SEO copy, and video editing.' },
];

export const INITIAL_GIGS: Gig[] = [
  // 1. Website Development
  { 
    id: '1.1', 
    category: 'web_dev', 
    title: 'Business Website (5-7 Pages)', 
    description: 'Clean, modern, mobile-responsive business website. Includes Home, About, Services, Contact.', 
    price: 399, 
    rating: 4.9, 
    reviews: 120, 
    features: ['5-7 Pages', 'Mobile Responsive', 'Contact Form', 'SEO Setup'], 
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800', // Abstract Web/UI
    status: 'active' 
  },
  { 
    id: '1.2', 
    category: 'web_dev', 
    title: 'Website Redesign & Speed', 
    description: 'Redesign your existing website for a modern look while improving performance and SEO.', 
    price: 299, 
    rating: 4.8, 
    reviews: 85, 
    features: ['UI Improvements', 'Speed Optimization', 'Mobile Fixes', 'Asset Compression'], 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', // Cyberpunk Speed/Tech
    status: 'active' 
  },

  // 2. E-Commerce
  { 
    id: '6.1', 
    category: 'ecommerce', 
    title: 'Shopify Store Launch', 
    description: 'Complete Shopify setup with pages, product upload, apps, and payment gateway integration.', 
    price: 249, 
    rating: 5.0, 
    reviews: 210, 
    features: ['Store Setup', 'Payment Gateway', 'Theme Install', '10 Products'], 
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800', // Abstract 3D Green/Tech (Shopify vibes)
    status: 'active' 
  },
  { 
    id: '6.2', 
    category: 'ecommerce', 
    title: 'WooCommerce Store Setup', 
    description: 'Full WooCommerce configuration on WordPress with checkout optimization.', 
    price: 199, 
    rating: 4.9, 
    reviews: 95, 
    features: ['WordPress Install', 'WooCommerce Config', 'Plugin Setup', 'Basic SEO'], 
    image: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&fit=crop&q=80&w=800', // Abstract Neon Purple Fluid (Woo vibes)
    status: 'active' 
  },
  { 
    id: '6.3', 
    category: 'ecommerce', 
    title: 'Dropshipping Store Setup', 
    description: 'Complete dropshipping store setup with supplier integration and product import.', 
    price: 249, 
    rating: 4.7, 
    reviews: 60, 
    features: ['Supplier Integration', 'Product Import', 'Automation', 'Niche Research'], 
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800', // Abstract Gradient Blue (Global vibes)
    status: 'active' 
  },

  // 3. Custom Dev
  { 
    id: '2.1', 
    category: 'custom_dev', 
    title: 'SaaS MVP / CRM Dashboard', 
    description: 'Fully custom web application with authentication, database, and management dashboard.', 
    price: 1500, 
    rating: 5.0, 
    reviews: 42, 
    features: ['React/Next.js', 'Database Setup', 'Auth System', 'Admin Dashboard'], 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Data Analytics/Dashboard
    status: 'active' 
  },
  { 
    id: '2.2', 
    category: 'custom_dev', 
    title: 'Cross-Platform Mobile App', 
    description: 'Modern mobile app built with React Native for iOS and Android.', 
    price: 1200, 
    rating: 4.9, 
    reviews: 67, 
    features: ['iOS + Android', '3-4 Screens', 'API Integration', 'App Store Prep'], 
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', // Mobile Abstract
    status: 'active' 
  },
  { 
    id: '2.3', 
    category: 'custom_dev', 
    title: 'Custom API Development', 
    description: 'Secure REST API development or third-party integrations (Stripe, Twilio, etc).', 
    price: 199, 
    rating: 5.0, 
    reviews: 30, 
    features: ['Secure Endpoints', 'Documentation', 'Fast Response', 'Scalable'], 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800', // Server Nodes
    status: 'active' 
  },

  // 4. Branding
  { 
    id: '3.1', 
    category: 'branding', 
    title: 'Full Brand Identity Kit', 
    description: 'Complete branding including logo variations, color palette, and typography guidelines.', 
    price: 99, 
    rating: 4.8, 
    reviews: 340, 
    features: ['Logo Design', 'Color Palette', 'Typography', 'Source Files'], 
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800', // Abstract 3D Shapes
    status: 'active' 
  },
  { 
    id: '3.2', 
    category: 'branding', 
    title: 'UI/UX Design (Figma)', 
    description: 'Professional, conversion-optimized interface design for websites or apps.', 
    price: 149, 
    rating: 4.9, 
    reviews: 150, 
    features: ['3 Screens', 'Figma File', 'User Friendly', 'Modern Style'], 
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', // Design Grid/Layout
    status: 'active' 
  },
  { 
    id: '3.3', 
    category: 'branding', 
    title: 'High-Conversion Landing Page', 
    description: 'Premium sales-optimized landing page design for marketing or product launch.', 
    price: 129, 
    rating: 4.9, 
    reviews: 88, 
    features: ['Sales Focused', 'Custom Graphics', 'Mobile Ready', 'Figma File'], 
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', // Abstract Gradient Flow
    status: 'active' 
  },

  // 5. AI & Automation
  { 
    id: '4.1', 
    category: 'ai_auto', 
    title: 'AI Chatbot Integration', 
    description: 'Intelligent AI chatbot (GPT-4) to automate support and lead generation.', 
    price: 199, 
    rating: 5.0, 
    reviews: 55, 
    features: ['OpenAI Integration', 'Custom Prompts', 'Website Embed', '24/7 Support'], 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', // AI Brain/Neural
    status: 'active' 
  },
  { 
    id: '4.2', 
    category: 'ai_auto', 
    title: 'Workflow Automation', 
    description: 'Automate repetitive tasks using Zapier, Make, and AI agents.', 
    price: 149, 
    rating: 4.9, 
    reviews: 80, 
    features: ['Zapier/Make', '1 Workflow', 'Error Handling', 'Time Saving'], 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', // Circuit/Chip
    status: 'active' 
  },
  { 
    id: '4.3', 
    category: 'ai_auto', 
    title: 'Custom AI Agent Model', 
    description: 'Specialized AI agent to process documents, generate insights, or automate specific tasks.', 
    price: 249, 
    rating: 5.0, 
    reviews: 20, 
    features: ['Model Training', 'Custom Knowledge', 'API Access', 'Testing'], 
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800', // Neural Nodes
    status: 'active' 
  },

  // 6. CRM
  { 
    id: '5.1', 
    category: 'crm_api', 
    title: 'Salesforce Integration', 
    description: 'Connect your systems with Salesforce for data sync and automation.', 
    price: 299, 
    rating: 4.8, 
    reviews: 25, 
    features: ['REST API', 'Data Sync', 'Secure', 'Custom Logic'], 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', // Data Globe/Network
    status: 'active' 
  },
  { 
    id: '5.2', 
    category: 'crm_api', 
    title: 'CRM Setup (HubSpot/Zoho)', 
    description: 'Configure pipelines, automate workflows, and integrate email marketing.', 
    price: 199, 
    rating: 4.9, 
    reviews: 40, 
    features: ['Pipeline Setup', 'Email Auth', 'User Roles', 'Import Data'], 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Growth Chart
    status: 'active' 
  },

  // 7. Maintenance
  { 
    id: '7.1', 
    category: 'maintenance', 
    title: 'Monthly Website Care', 
    description: 'Ongoing updates, backups, bug fixing, and professional support.', 
    price: 99, 
    rating: 5.0, 
    reviews: 500, 
    features: ['Weekly Backups', 'Plugin Updates', 'Uptime Monitor', 'Priority Support'], 
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800', // Security Shield
    status: 'active' 
  },
  { 
    id: '7.2', 
    category: 'maintenance', 
    title: 'Speed & Security Pack', 
    description: 'Improve loading speed, cache optimization, and secure your website.', 
    price: 99, 
    rating: 4.9, 
    reviews: 120, 
    features: ['Cache Setup', 'Malware Scan', 'CDN Config', 'Database Clean'], 
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', // Server Lights/Lock
    status: 'active' 
  },
  { 
    id: '7.3', 
    category: 'maintenance', 
    title: 'Dedicated Tech Support', 
    description: 'Retainer for priority support, development hours, and on-demand help.', 
    price: 299, 
    rating: 5.0, 
    reviews: 15, 
    features: ['5 Hours/Mo', 'Priority Queue', 'Direct Chat', 'Consulting'], 
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', // Tech Support/Team
    status: 'active' 
  },

  // 8. Marketing
  { 
    id: '8.1', 
    category: 'marketing', 
    title: 'Social Media Design Pack', 
    description: 'High-quality designs for Facebook, Instagram, TikTok, and LinkedIn.', 
    price: 99, 
    rating: 4.7, 
    reviews: 110, 
    features: ['10 Posts', 'Source Files', 'Brand Aligned', 'Fast Delivery'], 
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800', // Social Media Abstract
    status: 'active' 
  },
  { 
    id: '8.2', 
    category: 'marketing', 
    title: 'SEO Copywriting', 
    description: 'Professional website copy written for SEO, clarity, and conversion.', 
    price: 49, 
    rating: 4.8, 
    reviews: 90, 
    features: ['1 Page', 'Keyword Research', 'Human Written', 'Engaging'], 
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800', // Writing/Type
    status: 'active' 
  },
  { 
    id: '8.3', 
    category: 'marketing', 
    title: 'Short Video Editing', 
    description: 'High-quality editing for Reels, TikToks, and social media ads.', 
    price: 49, 
    rating: 4.9, 
    reviews: 75, 
    features: ['1 Video', 'Captions', 'Transitions', 'Color Grade'], 
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800', // Film Reel/Abstract
    status: 'active' 
  },
];

export const INITIAL_ORDERS: Order[] = [
  { id: 'ORD-001', client: 'Acme Corp', gigId: '1.1', amount: 399, status: 'in_progress', date: '2024-03-10', assignee: 'Sarah J.' },
  { id: 'ORD-002', client: 'StartUp Inc', gigId: '3.1', amount: 99, status: 'pending', date: '2024-03-12', assignee: 'Unassigned' },
  { id: 'ORD-003', client: 'Global Tech', gigId: '2.1', amount: 1500, status: 'review', date: '2024-03-08', assignee: 'Mike T.' },
  { id: 'ORD-004', client: 'Local Shop', gigId: '6.1', amount: 249, status: 'completed', date: '2024-03-01', assignee: 'Sarah J.' },
  // Added for Client Demo
  { id: 'ORD-005', client: 'Client', gigId: '2.2', amount: 1200, status: 'in_progress', date: '2024-03-25', assignee: 'Dev Team Alpha' },
];

export const INITIAL_TASKS: Task[] = [
  { id: 'TSK-101', orderId: 'ORD-001', title: 'Design Homepage Mockup', status: 'completed', due: '2024-03-12', priority: 'high' },
  { id: 'TSK-102', orderId: 'ORD-001', title: 'Develop React Components', status: 'in_progress', due: '2024-03-15', priority: 'high' },
  { id: 'TSK-103', orderId: 'ORD-003', title: 'Database Schema Design', status: 'pending', due: '2024-03-20', priority: 'medium' },
];