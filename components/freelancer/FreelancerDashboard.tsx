import React from 'react';
import { Briefcase, Clock, CheckCircle, FileText } from 'lucide-react';
import { Task } from '../../types';

interface FreelancerDashboardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onLogout: () => void;
}

const FreelancerDashboard: React.FC<FreelancerDashboardProps> = ({ tasks, setTasks, onLogout }) => {
  const markComplete = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: 'completed' } : t));
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <nav className="bg-slate-900 text-white p-4 flex justify-between items-center px-8">
        <div className="font-bold text-xl flex items-center gap-2">
          <Briefcase /> Codexier <span className="text-slate-400 text-sm font-normal">/ Freelancer Portal</span>
        </div>
        <button onClick={onLogout} className="text-sm hover:text-red-400">Sign Out</button>
      </nav>
      <div className="max-w-5xl mx-auto p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">My Tasks</h1>
          <p className="text-slate-500">Welcome back, Freelancer. You have {tasks.filter(t => t.status !== 'completed').length} active tasks.</p>
        </header>
        <div className="grid gap-4">
          {tasks.map(task => (
            <div key={task.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${task.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                    {task.priority}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{task.id}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{task.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                  <span className="flex items-center gap-1"><Clock size={14} /> Due: {task.due}</span>
                  <span className="flex items-center gap-1"><FileText size={14} /> Order: {task.orderId}</span>
                </div>
              </div>
              <div>
                {task.status === 'completed' ? (
                  <span className="flex items-center gap-2 text-green-600 font-bold"><CheckCircle size={20} /> Completed</span>
                ) : (
                  <button onClick={() => markComplete(task.id)} className="bg-slate-900 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">Mark Complete</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
