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

// Özel düğüm (node) türlerini tanımla
const nodeTypes = {
  toolAgent: ToolAgentNode,
  condition: ConditionNode,
  start: StartNode,
};

// Özel kenar (edge) türlerini tanımla
const edgeTypes = {
  custom: CustomEdge,
};

function FlowCanvas() {
  // Düğüm ve kenar durumları
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // React Flow pozisyonlama için referans
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();

  // Düğüm ID'si için sayaç
  const [nodeId, setNodeId] = useState(1);

  // Kenar bağlama işlemi
  const onConnect = useCallback(
    (params: any) => {
      setEdges((eds) => addEdge({ ...params, type: "custom" }, eds));
      console.log("Yeni bağlantı:", params);
    },
    [setEdges]
  );

  // Sürükle-bırak sırasında varsayılan davranışı engelle
  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // Bırakma işlemi gerçekleştiğinde tetiklenir
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const nodeTypeData = event.dataTransfer.getData("application/reactflow");

      if (!nodeTypeData) return;

      let nodeType;
      try {
        nodeType = JSON.parse(nodeTypeData);
      } catch (err) {
        console.error("Geçersiz nodeType JSON:", err);
        return;
      }

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
