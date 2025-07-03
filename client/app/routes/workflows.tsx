import {
  Copy,
  MoreVertical,
  Pencil,
  Plus,
  Search,
  Share,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

import Sidebar from "~/components/dashboard/Sidebar";

export default function WorkflowsLayout() {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: "workflow",
      tag: "business",
      created: "June 26th, 2025",
      updated: "June 26th, 2025",
    },
    {
      id: 2,
      name: "workflow2",
      tag: "business",
      created: "June 30th, 2025",
      updated: "June 30th, 2025",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id: number) => {
    setWorkflows(workflows.filter((workflow) => workflow.id !== id));
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 m-10 bg-white">
        {/* Container: Sayfayı ortala ve sınırlı genişlik ver */}
        <div className="max-w-screen-xl mx-auto">
          {/* Başlık ve üst filtre alanı */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-4xl font-medium text-start">Workflows</h1>
              <p className="text-gray-600">
                Create, edit, and manage your automated workflows visually and
                intuitively.
              </p>
              <select className="border border-gray-500 rounded-lg px-3 py-1 text-sm w-64 h-10">
                <option className="text-sm">Last 7 days</option>
              </select>
            </div>

            <div className="flex items-center gap-6 justify-center">
              <div className="flex gap-2 p-3 flex-col items-start">
                <label className="input w-full rounded-2xl border flex items-center gap-2 px-2 py-1">
                  <Search className="h-4 w-4 opacity-50" />
                  <input
                    type="search"
                    className="grow w-62"
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </label>
              </div>

              <Link to="/canvas" className="">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#9664E0] text-white rounded-lg hover:bg-[#8557d4] transition duration-200">
                  <Plus className="w-4 h-4" />
                  Create Workflow
                </button>
              </Link>
            </div>
          </div>

          {/* Tablo */}

          <div className="relative rounded-xl border border-gray-300">
            <table className="w-full text-sm p-2 overflow-hidden">
              <thead className="bg-[#F5F5F5] text-left text-md border-b border-gray-300">
                <tr>
                  <th className="p-6 font-normal text-base">Name</th>
                  <th className="p-6 font-normal text-base">Tag</th>
                  <th className="p-6 font-normal text-base">Created</th>
                  <th className="p-6 font-normal text-base">Updated</th>
                  <th className="p-6 font-normal text-base"></th>
                </tr>
              </thead>
              <tbody>
                {workflows
                  .filter((workflow) =>
                    workflow.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((workflow) => (
                    <tr key={workflow.id} className="border-b border-gray-300">
                      <td className="p-6">{workflow.name}</td>
                      <td className="p-6">{workflow.tag}</td>
                      <td className="p-6">
                        {workflow.created}
                        <br />
                      </td>
                      <td className="p-6">
                        {workflow.updated}
                        <br />
                      </td>
                      <td className="p-6 relative">
                        {/* DaisyUI Dropdown */}
                        <div className="relative dropdown">
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
                              <a
                                className="text-red-600"
                                onClick={() => handleDelete(workflow.id)}
                              >
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
      </main>
    </div>
  );
}
