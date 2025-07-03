import React, { useState } from "react";
import { Search } from "lucide-react";
import DraggableNode from "./DraggableNode";

const NODE_TYPE_LIST = [
  {
    id: "1",
    type: "start",
    label: "Start",
    data: {},
    info: "Represents the beginning of the flow. Every scenario starts with a Start node.",
  },
  {
    id: "2",
    type: "toolAgent",
    label: "Agent",
    data: {
      name: "Agent",
      tools: [],
      memory: { type: "buffer", size: 100 },
      model: { provider: "openai", model: "gpt-4" },
      prompt: "Sen yardımcı bir AI asistanısın.",
      moderation: { enabled: false },
    },
    info: "Executes AI tasks using tools, memory, and language models. You can configure its behavior via settings.",
  },
  {
    id: "3",
    type: "condition",
    label: "Condition",
    data: {
      name: "Condition",
      conditions: [
        {
          id: 0,
          type: "String",
          value1: "",
          operation: "Equal",
          value2: "",
        },
      ],
      logicOperator: "AND",
    },
    info: "Adds logic-based branching. Directs the flow based on true/false evaluation of defined rules.",
  },
];

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-72 border-r border-gray-200">
      {/* Search Input */}
      <div className="flex gap-2 mb-4 p-3 flex-col items-start">
        <h3 className="font-bold mb-4 text-gray-700">Add Nodes</h3>
        <label className="input w-full rounded-2xl border flex items-center gap-2 px-2 py-1">
          <Search className="h-4 w-4 opacity-50" />
          <input
            type="search"
            className="grow"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>

      {/* Accordion: Nodes */}
      <div className="collapse collapse-arrow bg-white  rounded-lg">
        <input type="checkbox" defaultChecked />
        <div className="collapse-title font-semibold text-sm">Nodes</div>
        <div className="collapse-content space-y-2">
          {NODE_TYPE_LIST.filter((nodeType) =>
            nodeType.label.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((nodeType) => (
            <>
              <DraggableNode key={nodeType.id} nodeType={nodeType} />
              <hr className="my-2 border-gray-200" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
