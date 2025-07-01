import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Controls,
  Background,
  MiniMap,
} from "reactflow";
import ToolAgentNode from "./ToolAgentNode";
import StartNode from "./StartNode";
import CustomEdge from "./CustomEdge";
import ConditionNode from "./ConditionNode";

const nodeTypes = {
  toolAgent: ToolAgentNode,
  condition: ConditionNode,
  start: StartNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();
  const [nodeId, setNodeId] = useState(1);

  const onConnect = useCallback(
    (params: any) => {
      setEdges((eds) => addEdge({ ...params, type: "custom" }, eds));
      console.log(params);
    },
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const nodeTypeData = event.dataTransfer.getData("application/reactflow");

      if (!nodeTypeData) {
        return;
      }

      const nodeType = JSON.parse(nodeTypeData);
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${nodeType.type}-${nodeId}`,
        type: nodeType.type,
        position,
        data: {
          ...nodeType.data,
        },
      };

      setNodes((nds) => nds.concat(newNode));
      setNodeId((id) => id + 1);
    },
    [screenToFlowPosition, setNodes, nodeId]
  );

  return (
    <div className="flex-1 h-full">
      <div
        ref={reactFlowWrapper}
        className="w-full h-full"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          className="bg-gray-50"
        >
          <Controls position="top-right" />
          <Background gap={20} size={1} />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
}

export default FlowCanvas;
