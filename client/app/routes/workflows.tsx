import {
  Copy,
  MoreVertical,
  Pencil,
  Plus,
  Share,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

import Sidebar from "~/components/dashboard/Sidebar";

const workflows = [
  {
    name: "workflow",
    tag: "business",
    created: "June 26th, 2025",
    updated: "June 26th, 2025",
  },
];

export default function WorkflowsLayout() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white">
        {/* Container: Sayfayı ortala ve sınırlı genişlik ver */}
        <div className="max-w-screen-xl mx-auto">
          {/* Başlık ve üst filtre alanı */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-4xl font-medium text-start">Workflows</h1>
              <select className="border border-gray-500 rounded-lg px-3 py-1 text-sm w-64">
                <option className="text-sm">Last 7 days</option>
              </select>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded px-3 py-1 text-sm h-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F5F5F5] transition duration-500 h-10">
                  <Link
                    to="/canvas"
                    className="flex items-center gap-2 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Create Workflow
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Tablo */}
          <div className="border border-[#F5F5F5] rounded-lg ">
            <div className="">
              <table className="w-full text-sm">
                <thead className="bg-[#F5F5F5] text-left text-lg">
                  <tr>
                    <th className="p-3 font-medium">Name</th>
                    <th className="p-3 font-medium">Tag</th>
                    <th className="p-3 font-medium">Created</th>
                    <th className="p-3 font-medium">Updated</th>
                    <th className="p-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {workflows.map((workflow) => (
                    <tr key={workflow.name}>
                      <td className="p-3">{workflow.name}</td>
                      <td className="p-3">{workflow.tag}</td>
                      <td className="p-3">
                        {workflow.created}
                        <br />
                      </td>
                      <td className="p-3">
                        {workflow.updated}
                        <br />
                      </td>
                      <td className="p-3 relative">
                        {/* DaisyUI Dropdown */}
                        <div className="dropdown dropdown-end">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-sm p-2"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1000] menu p-2 shadow bg-base-100 border border-gray-200 rounded-box w-40 absolute right-0 top-full mt-1"
                          >
                            <li>
                              <a>
                                <Pencil className="w-4 h-4" />
                                Rename
                              </a>
                            </li>
                            <li>
                              <a>
                                <Copy className="w-4 h-4" />
                                Duplicate
                              </a>
                            </li>
                            <li>
                              <a>
                                <Share className="w-4 h-4" />
                                Share
                              </a>
                            </li>
                            <li>
                              <a className="text-red-600">
                                <Trash className="w-4 h-4" />
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}