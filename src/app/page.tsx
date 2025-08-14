"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import StatsCard from "@/components/StatsCard";
import BarChartComponent from "@/components/BarChartComponent";
import CircularChart from "@/components/CircularChart";
import StatusCard from "@/components/StatusCard";
import ProgressBar from "@/components/ProgressBar";
import {
  mockKYCStats,
  mockChartData,
  mockCircularData,
  mockStatusCards,
  mockPANStats,
} from "@/lib/data";

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onMenuToggle={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Total KYCs Section */}
            <div className="rounded-lg bg-white p-6 shadow-sm border">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                Total KYCs: {mockKYCStats.total.toLocaleString()}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <StatsCard
                  title="New KYC"
                  value={mockKYCStats.newKYC}
                  change={mockKYCStats.newKYCChange}
                  isPositive={mockKYCStats.newKYCChange > 0}
                  color="blue"
                />
                <StatsCard
                  title="Modified KYC"
                  value={mockKYCStats.modifiedKYC}
                  change={mockKYCStats.modifiedKYCChange}
                  isPositive={mockKYCStats.modifiedKYCChange > 0}
                  color="green"
                />
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-2">
              <BarChartComponent data={mockChartData} />
              <CircularChart data={mockCircularData} />
            </div>

            {/* KYC Status Cards */}
            <div className="rounded-lg bg-white p-6 shadow-sm border">
              <h3 className="mb-6 text-lg font-semibold text-gray-900">
                KYC Status Overview
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockStatusCards.map((card, index) => (
                  <StatusCard key={index} card={card} index={index} />
                ))}
              </div>
            </div>

            {/* Categories & PAN Stats Section */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Categories Progress */}
              <div className="rounded-lg bg-white p-6 shadow-sm border">
                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                  Categories
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-4 text-sm font-medium text-gray-700">Individual</h4>
                    <ProgressBar label="RI" value={350} max={500} />
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-medium text-gray-700">Non-Individual</h4>
                    <ProgressBar label="NRI" value={280} max={400} color="gray" />
                  </div>
                </div>
              </div>

              {/* PAN & Data Stats */}
              <div className="rounded-lg bg-white p-6 shadow-sm border">
                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                  PAN & Data Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">No. of PANs Solicited</span>
                    <span className="font-semibold text-gray-900">{mockPANStats.solicited}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Data Received</span>
                    <span className="font-semibold text-gray-900">{mockPANStats.dataReceived}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{mockPANStats.dataReceivedWithImage}</p>
                      <p className="text-xs text-gray-500">With Image</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{mockPANStats.dataReceivedWithoutImage}</p>
                      <p className="text-xs text-gray-500">Without Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
