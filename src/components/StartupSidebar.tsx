import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  FileEdit, 
  TrendingUp, 
  Users, 
  Mail, 
  MessageSquare, 
  DollarSign, 
  BookOpen,
  User,
  Search,
  Bell
} from 'lucide-react';

interface StartupSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function StartupSidebar({ activeTab, setActiveTab }: StartupSidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'builder', label: 'Campaign Builder', icon: FileEdit },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'backers', label: 'Backers & Orders', icon: Users },
    { id: 'wishlist', label: 'Wishlist Emails', icon: Mail },
    { id: 'posts', label: 'Progress Posts', icon: MessageSquare },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-gray-800 border-r border-gray-700 z-40">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">U</span>
          </div>
          <div>
            <div className="text-white font-semibold">Upfound</div>
            <div className="text-xs text-gray-400">Startup Dashboard</div>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search campaigns, orders..."
            className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none text-sm"
          />
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-400">NOTIFICATIONS</span>
          <Bell className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {activeTab === item.id && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}