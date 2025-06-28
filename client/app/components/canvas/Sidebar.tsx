import React from "react";
import { Plus } from "lucide-react";
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
    <div className="w-64 bg-gray-50 p-4 border-r border-gray-200">
      <h3 className="font-bold mb-4 text-gray-700 flex items-center gap-2">
        <Plus className="w-5 h-5" />
        Agents
      </h3>
      <div className="space-y-3">
        {NODE_TYPE_LIST.map((nodeType) => (
          <DraggableNode key={nodeType.id} nodeType={nodeType} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
