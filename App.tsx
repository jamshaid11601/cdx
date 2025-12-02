import React, { useState, useEffect } from 'react';
import { User, UserRole, PageView, Gig, Order, Task, Message } from './types';
import { INITIAL_GIGS, INITIAL_ORDERS, INITIAL_TASKS } from './constants';

// Shared Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import CheckoutModal from './components/checkout/CheckoutModal';

// Public Components
import HomePage from './components/public/HomePage';
import Marketplace from './components/public/Marketplace';
import CustomOrder from './components/public/CustomOrder';
import AboutPage from './components/public/AboutPage';
import PortfolioPage from './components/public/PortfolioPage';

// Freelancer Components
import FreelancerDashboard from './components/freelancer/FreelancerDashboard';

// Client Components
import ClientDashboard from './components/client/ClientDashboard';

// Admin Components
import AdminLayout, { AdminTab } from './components/admin/AdminLayout';
import AdminDashboardHome from './components/admin/AdminDashboardHome';
import AdminKanban from './components/admin/AdminKanban';
import AdminServices from './components/admin/AdminServices';
import AdminMessages from './components/admin/AdminMessages';
import AdminFinance from './components/admin/AdminFinance';

export default function App() {
  const [activePage, setPage] = useState<PageView>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  // Checkout State
  const [selectedGig, setSelectedGig] = useState<Gig | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Admin State
  const [adminTab, setAdminTab] = useState<AdminTab>('dashboard');

  // Shared Database State
  const [gigs, setGigs] = useState<Gig[]>(INITIAL_GIGS);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  
  // Messaging State (Global for demo purposes)
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm1', sender: 'admin', text: 'Welcome to Codexier! How can we help you today?', timestamp: new Date(Date.now() - 3600000).toISOString(), read: true },
    { id: 'm2', sender: 'client', text: 'Hi, I just placed an order for the SaaS MVP.', timestamp: new Date(Date.now() - 3500000).toISOString(), read: true },
  ]);

  // Scroll to top whenever activePage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleLogin = (role: UserRole) => {
    setUser({ 
      role, 
      name: role === 'admin' ? 'Admin' : role === 'client' ? 'Client' : 'Freelancer',
      email: role === 'client' ? 'client@example.com' : undefined 
    });
    setIsLoginOpen(false);
    if (role === 'client') {
        setPage('dashboard'); // Explicitly switch to dashboard view logic
    }
  };

  const handleLogout = () => {
    setUser(null);
    setPage('home');
  };

  const handleBuyGig = (gig: Gig) => {
    setSelectedGig(gig);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => setSelectedGig(null), 300); // Clear after animation
  };

  const handleCheckoutSuccess = (customer: { name: string, email: string }) => {
    if (!selectedGig) return;

    // 1. Create New Order
    const newOrder: Order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      client: customer.name,
      gigId: selectedGig.id,
      amount: selectedGig.price,
      status: 'pending', // Starts as pending
      date: new Date().toISOString().split('T')[0],
      assignee: 'Pending Assignment'
    };

    setOrders(prev => [newOrder, ...prev]);

    // 2. Auto-Register & Log In User as Client
    const newUser: User = {
      role: 'client',
      name: customer.name,
      email: customer.email
    };
    setUser(newUser);

    // 3. Close Modal and Switch View
    handleCloseCheckout();
    setPage('dashboard'); // Switch to dashboard view
  };

  // Messaging Handlers
  const handleClientSendMessage = (text: string) => {
      const newMsg: Message = {
          id: `m${Date.now()}`,
          sender: 'client',
          text,
          timestamp: new Date().toISOString(),
          read: false
      };
      setMessages(prev => [...prev, newMsg]);
  };

  const handleAdminSendMessage = (text: string) => {
      const newMsg: Message = {
          id: `m${Date.now()}`,
          sender: 'admin',
          text,
          timestamp: new Date().toISOString(),
          read: false
      };
      setMessages(prev => [...prev, newMsg]);
  };

  // 1. Admin View
  if (user?.role === 'admin') {
    return (
      <AdminLayout activeTab={adminTab} setActiveTab={setAdminTab} onLogout={handleLogout}>
        {adminTab === 'dashboard' && <AdminDashboardHome orders={orders} />}
        {adminTab === 'orders' && <AdminKanban orders={orders} setOrders={setOrders} />}
        {adminTab === 'services' && <AdminServices gigs={gigs} setGigs={setGigs} />}
        {adminTab === 'messages' && <AdminMessages messages={messages} onSendMessage={handleAdminSendMessage} />}
        {adminTab === 'finance' && <AdminFinance orders={orders} />}
      </AdminLayout>
    );
  }

  // 2. Freelancer View
  if (user?.role === 'freelancer') {
    return <FreelancerDashboard tasks={tasks} setTasks={setTasks} onLogout={handleLogout} />;
  }

  // 3. Client Dashboard (Exclusive View logic for Client)
  if (user?.role === 'client' && activePage === 'dashboard') {
     return (
        <>
            <ClientDashboard 
                user={user} 
                orders={orders} 
                gigs={gigs} 
                messages={messages}
                onSendMessage={handleClientSendMessage}
                onLogout={handleLogout} 
                onBrowse={() => { /* Handled internally now */ }} 
                onBuy={handleBuyGig}
            />
            {/* Render CheckoutModal here so clients can buy from within dashboard */}
            <CheckoutModal 
                isOpen={isCheckoutOpen} 
                onClose={handleCloseCheckout} 
                gig={selectedGig} 
                onSuccess={handleCheckoutSuccess} 
                user={user}
            />
        </>
     );
  }

  // 4. Public / Guest View (Or Client viewing public pages)
  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-500/30">
      <Navigation 
        activePage={activePage} 
        setPage={(page) => {
            // If user clicks "Dashboard" in nav (simulated via logic below), switch back
            if (page === 'dashboard' && user?.role === 'client') {
                setPage('dashboard');
            } else {
                setPage(page);
            }
        }} 
        onOpenLogin={() => {
            if (user?.role === 'client') {
                setPage('dashboard');
            } else {
                setIsLoginOpen(true);
            }
        }}
        user={user} // Pass user to show profile/dashboard button
      />
      
      <main className="pt-0">
        {activePage === 'home' && <HomePage setPage={setPage} />}
        {activePage === 'marketplace' && <Marketplace setPage={setPage} gigs={gigs} onBuy={handleBuyGig} />}
        {activePage === 'custom-order' && <CustomOrder />}
        {activePage === 'about' && <AboutPage setPage={setPage} />}
        {activePage === 'portfolio' && <PortfolioPage setPage={setPage} />}
      </main>
      <Footer setPage={setPage} />
      
      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLogin={handleLogin} />
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
        gig={selectedGig} 
        onSuccess={handleCheckoutSuccess}
        user={user}
      />
      
      {/* Floating Action Button for Clients to return to Dashboard quickly if viewing public pages */}
      {user?.role === 'client' && (
          <button 
            onClick={() => setPage('dashboard')} 
            className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-3 rounded-full font-bold shadow-xl z-50 hover:bg-blue-600 transition-colors animate-in slide-in-from-bottom-10"
          >
            Return to Dashboard
          </button>
      )}
    </div>
  );
}