import {
  Home,
  Play,
  BarChart2,
  Key,
  Database,
  Layers,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-4 flex flex-col justify-between">
      <div>
        <div className="font-bold text-xl mb-8">
          <img src="logo.png" alt="" />
        </div>
        <nav className="space-y-2">
          <SidebarLink
            icon={<Home className="w-4 h-4" />}
            label=""
            active={location.pathname === "/"}
          />
          <SidebarLink
            icon={<Play className="w-4 h-4" />}
            label="Workflows"
            active={location.pathname === "/workflows"}
          />
          <SidebarLink
            icon={<BarChart2 className="w-4 h-4" />}
            label="Executions"
            active={location.pathname === "/executions"}
          />
          <SidebarLink
            icon={<Key className="w-4 h-4" />}
            label="Credentials"
            active={location.pathname === "/credentials"}
          />
        </nav>
        <div className="mt-8 space-y-2">
          <SidebarLink
            icon={<Database className="w-4 h-4" />}
            label="Variables"
            active={location.pathname === "/variables"}
          />
          <SidebarLink
            icon={<Layers className="w-4 h-4" />}
            label="Templates"
            active={location.pathname === "/templates"}
          />
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setUserMenuOpen(!userMenuOpen)}
          className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100"
        >
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="text-sm">username</span>
          </div>
          <div className="text-sm">☰</div>
        </button>
        {userMenuOpen && (
          <div className="left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-full z-10">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
              <Settings className="w-4 h-4" /> Settings
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
function SidebarLink({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      to={`/${label.toLowerCase()}`}
      className={`flex items-center gap-2 p-2 rounded-lg w-full  text-left hover:bg-[#D9DEE8]  transition-colors ${
        active ? "bg-[#D9DEE8] font-semibold" : ""
      }`}
    >
      {icon}
      <span className="text-lg text-[#414244]">{label}</span>
    </Link>
  );
}
