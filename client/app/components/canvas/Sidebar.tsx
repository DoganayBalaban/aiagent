import React from "react";
import { Search } from "lucide-react";
import DraggableNode from "./DraggableNode";

const NODE_TYPE_LIST = [
  {
    id: "1",
    type: "toolAgent",
    label: "Tool Agent",
    data: {
      name: "Tool Agent",
      tools: [],
      memory: { type: "buffer", size: 100 },
      model: { provider: "openai", model: "gpt-4" },
      prompt: "Sen yardımcı bir AI asistanısın.",
      moderation: { enabled: false },
    },
  },
  {
    id: "2",
    type: "start",
    label: "Start",
    data: {},
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
  },
];

function Sidebar() {
  return (
    <div className="w-64 bg-gray-50  border-r border-gray-200 overflow-y-auto h-screen">
      {/* Search Input */}
      <div className="flex gap-2 mb-4 p-3 flex-col items-start">
        <h3 className="font-bold mb-4 text-gray-700">Add Nodes</h3>
        <label className="input w-full rounded-2xl border flex items-center gap-2 px-2 py-1">
          <Search className="h-4 w-4 opacity-50" />
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>

      {/* Accordion: Nodes */}
      <div className="collapse collapse-arrow bg-white border border-base-300 rounded-lg">
        <input type="checkbox" defaultChecked />
        <div className="collapse-title font-semibold text-sm">Nodes</div>
        <div className="collapse-content space-y-2">
          {NODE_TYPE_LIST.map((nodeType) => (
            <DraggableNode key={nodeType.id} nodeType={nodeType} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
