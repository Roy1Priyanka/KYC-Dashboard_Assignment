"use client";

import { useState } from "react";
import {
  BarChart3,
  Bell,
  CreditCard,
  FileText,
  Home,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Users, label: "Applications", active: false },
  { icon: CreditCard, label: "Billing", active: false },
  { icon: CreditCard, label: "Rate Card", active: false },
  { icon: FileText, label: "Agreement Copy", active: false },
  { icon: Bell, label: "Notices", active: false },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-white shadow-lg transition-all duration-300 lg:relative lg:translate-x-0",
          isCollapsed ? "-translate-x-full lg:w-16" : "w-64 translate-x-0"
        )}
      >
        {/* Logo and toggle */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Logs</span>
            </div>
          )}
          <button
            onClick={onToggle}
            className="rounded p-1 hover:bg-gray-100 lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    item.active
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        {!isCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs text-gray-600">Axis MF</p>
              <p className="text-sm font-medium text-gray-900">Home</p>
              <p className="text-xs text-gray-500">Dashboard</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
