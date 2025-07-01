// DashboardLayout.jsx
import { MoreVertical, Pencil, Plus, Search, Trash, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

import Sidebar from "~/components/dashboard/Sidebar";

export default function CredentialsLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [credentials, setCredentials] = useState([
    {
      id: 1,
      name: "OpenAI API",
      logo: "https://www.svgrepo.com/show/306500/openai.svg",
      updated: "June 26th, 2025",
      created: "June 26th, 2025",
    },
    {
      id: 2,
      name: "GitHub API",
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      updated: "June 30th, 2025",
      created: "June 30th, 2025",
    },
  ]);
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: "OpenAI API",
      logo: "https://www.svgrepo.com/show/306500/openai.svg",
    },
    {
      id: 2,
      name: "GitHub API",
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      id: 3,
      name: "Google API",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    },
  ]);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 m-10 bg-white">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl font-medium text-start">Credentials</h1>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm w-32">
              <option className="text-sm">Last 7 days</option>
            </select>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 justify-center">
              <div className="flex gap-2 p-3 flex-col items-start">
                <label className="input w-full rounded-2xl border flex items-center gap-2 px-2 py-1">
                  <Search className="h-4 w-4 opacity-50" />
                  <input
                    type="search"
                    className="grow"
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </label>
              </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => {
                const dialog = document.getElementById(
                  "my_modal_2"
                ) as HTMLDialogElement;
                if (dialog) {
                  dialog.showModal();
                }
              }}
            >
              Create Credential
            </button>
            <dialog id="my_modal_2" className="modal">
              <div>
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Add New Credential</h3>
                  <div className="flex items-center gap-6 justify-center w-full">
                    <div className="flex gap-2 p-3 flex-col items-start w-full">
                      <label className="input w-full rounded-2xl border flex items-center gap-2 px-2 py-1">
                        <Search className="h-4 w-4 opacity-50" />
                        <input
                          type="search"
                          className="grow w-full"
                          placeholder="Search"
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {apiKeys.map((apiKey) => (
                      <div
                        key={apiKey.id}
                        className="flex items-center justify-center gap-2 w-full border rounded-2xl p-3 hover:bg-[#ede7f6] hover:text-[#9664E0]"
                      >
                        <img src={apiKey.logo} className="w-8 h-8" alt="" />
                        <h2 className="text-lg font-light">{apiKey.name}</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        {credentials.length === 0 ? (
          <p>No credentials found</p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-gray-300">
            <table className="w-full text-sm p-2">
              <thead className="bg-[#F5F5F5] text-left text-md border-b border-gray-300 ">
                <tr className="">
                  <th className="p-6 font-normal text-base">Name</th>
                  <th className="p-6 font-normal text-base">Created</th>
                  <th className="p-6 font-normal text-base">Updated</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {credentials
                  .filter((credential) =>
                    credential.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((credential) => (
                    <tr
                      key={credential.id}
                      className="border-b border-gray-300"
                    >
                      <td className="p-6 flex items-center gap-2 ">
                        <img src={credential.logo} className="w-8 h-8" alt="" />
                        {credential.name}
                      </td>
                      <td className="p-3">
                        {credential.updated}
                        <br />
                      </td>
                      <td className="p-3">
                        {credential.created}
                        <br />
                      </td>
                      <td className="">
                        <Pencil className="w-5 h-5 text-[#9664E0]" />
                      </td>
                      <td className="">
                        <Trash className="w-5 h-5 text-[#F44336]" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
