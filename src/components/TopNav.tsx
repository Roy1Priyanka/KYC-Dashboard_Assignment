"use client";

import { Bell, Calendar, ChevronDown, Menu, Search, User } from "lucide-react";

interface TopNavProps {
  onMenuToggle: () => void;
}

export default function TopNav({ onMenuToggle }: TopNavProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuToggle}
          className="rounded p-2 hover:bg-gray-100 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        {/* Breadcrumb */}
        <nav className="hidden text-sm text-gray-500 lg:block">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Dashboard</span>
        </nav>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-lg mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search applications..."
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Time range selector */}
        <div className="hidden items-center space-x-2 lg:flex">
          <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
            Today
          </button>
          <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100">
            This Month
          </button>
          <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Custom
          </button>
        </div>

        {/* Date picker */}
        <button className="hidden items-center space-x-1 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50 lg:flex">
          <Calendar className="h-4 w-4" />
          <span>12 Feb 2024</span>
        </button>

        {/* Notification */}
        <button className="relative rounded-lg p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="h-4 w-4 text-blue-600" />
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-medium text-gray-900">Priyanka KUMARI</p>
            <p className="text-xs text-gray-500">Admin User</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
