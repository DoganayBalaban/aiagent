// DashboardLayout.jsx
import { MoreVertical, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

import Sidebar from "~/components/dashboard/Sidebar";

export default function CredentialsLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="flex h-screen w-screen">
    
     <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
         <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-medium text-start">Credentials</h1>
          <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm w-32">
            <option className="text-sm">Last 7 days</option>
          </select>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-1 text-sm rounded-md " value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
              <X className="w-4 h-4 cursor-pointer absolute text-black " onClick={() => setSearchQuery("")}/>
            </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F5F5F5] transition duration-500">
            <Link to="/canvas" className="flex items-center gap-2"> <Plus className="w-4 h-4"/>Create Credential</Link>
            </button></div>
          </div>
        </div>

        <div className="border border-[#D9D9D9] rounded-lg ">
        <table className="w-full text-sm">
          <thead className="bg-[#D9D9D9] text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Tag</th>
              <th className="p-3">Created</th>
              <th className="p-3">Updated</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#F5F5F5]">
              <td className="p-3">workflow</td>
              <td className="p-3">buisness</td>
              <td className="p-3">June 26th, 2025<br />09:16:37</td>
              <td className="p-3">June 26th, 2025<br />09:16:37</td>
              <td className="p-3 relative">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <MoreVertical className="w-4 h-4" />
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-[#D9D9D9] rounded-md shadow-md w-32 text-sm z-10">
                    <button className="w-full text-left px-4 py-2 hover:bg-[#F5F5F5]">Rename</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-[#F5F5F5]">Duplicate</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-[#F5F5F5]">Share</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-[#F5F5F5] text-red-600">Delete</button>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

     
      </main>
    </div>
  );
}

