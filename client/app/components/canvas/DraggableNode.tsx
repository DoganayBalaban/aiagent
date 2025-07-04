import React from "react";
import { Bot, Divide, Play, Split, SquareFunction } from "lucide-react";

interface NodeType {
  id: string;
  type: string;
  label: string;
  data: any;
  info: string;
}

interface DraggableNodeProps {
  nodeType: NodeType;
}

function DraggableNode({ nodeType }: DraggableNodeProps) {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(nodeType)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="text-black  p-3 cursor-grab  hover:bg-gray-200 transition-all select-none cursor-grabbing rounded-2xl"
    >
      <div className=" flex items-center gap-2">
        {nodeType.type === "toolAgent" ? (
          <div className=" p-2 rounded-2xl">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
        ) : nodeType.type === "condition" ? (
          <div className=" p-2 rounded-2xl">
            <Split className="w-6 h-6 text-yellow-600" />
          </div>
        ) : nodeType.type === "start" ? (
          <div className=" p-2 rounded-2xl">
            <Play className="w-6 h-6 text-green-600" />
          </div>
        ) : nodeType.type === "customFunction" ? (
          <div className=" p-2 rounded-2xl">
            <SquareFunction className="w-6 h-6 text-purple-600" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-md font-medium text-gray-700">
              {nodeType.label}
            </h2>
          </div>
          <div>
            <p className="text-xs text-gray-500">{nodeType.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DraggableNode;
