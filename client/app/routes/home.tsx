// DashboardLayout.jsx
import React, { useState } from "react";
import { Home, Key, Play, Database, User, Settings, LogOut, Layers, BarChart2 } from "lucide-react";
import Sidebar from "~/components/dashboard/Sidebar";

export default function DashboardLayout() {


  const stats = [
    { label: "Prod. executions", value: 0 },
    { label: "Failed Prod. executions", value: 0 },
    { label: "Failure Rate", value: 0 },
    { label: "Time Saved", value: 0 },
    { label: "Run time", value: 0 },
  ];

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex flex-col items-start gap-4 justify-between mb-6">
          <h1 className="text-4xl font-medium text-start">Overview</h1>
          <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm w-32">
            <option>Last 7 days</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 text-center"
            >
              <div className="text-xs text-gray-600 mb-1">{stat.label}<br/>Last 7 days</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Placeholder for chart */}
        <div className="border border-gray-300 h-64 rounded-lg flex items-center justify-center">
          <span className="text-3xl">⎺⎽⎻⎺⎻⎺</span>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, onClick, active }: { icon: React.ReactNode, label: string, onClick: () => void, active: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 p-2 rounded-lg w-full text-left hover:bg-gray-100 transition-colors ${active ? "bg-gray-100 font-semibold" : ""}`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}
