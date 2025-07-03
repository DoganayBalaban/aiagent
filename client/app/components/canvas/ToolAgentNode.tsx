import React, { useRef } from "react";
import { useReactFlow, Handle, Position } from "reactflow";
import {
  Bot,
  Settings,
  CheckCircle,
  AlertCircle,
  Trash2,
  Info,
} from "lucide-react";
import AgentConfigModal from "./modals/AgentConfigModal";

interface ToolAgentNodeProps {
  data: any;
  id: string;
}

function ToolAgentNode({ data, id }: ToolAgentNodeProps) {
  const { setNodes } = useReactFlow();

  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  const handleConfigSave = (newConfig: any) => {
    setNodes((nodes: any[]) =>
      nodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, ...newConfig } }
          : node
      )
    );
  };

  const getStatusColor = () => {
    if (data?.tools?.length > 0 && data?.model?.provider) {
      return "border-green-400 bg-green-100 hover:bg-green-200";
    }
    return "border-orange-400 bg-orange-100 hover:bg-orange-200";
  };

  const getStatusIcon = () => {
    if (data?.tools?.length > 0 && data?.model?.provider) {
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    }
    return <AlertCircle className="w-4 h-4 text-orange-600" />;
  };

  return (
    <>
      {/* Ana node kutusu */}
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 text-gray-700 font-medium cursor-pointer transition-all ${getStatusColor()}`}
        onDoubleClick={handleOpenModal}
        title="Çift tıklayarak konfigüre edin"
      >
        <div className="bg-blue-500 p-3 rounded-lg">
          <Bot className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold">{data?.name || "Tool Agent"}</p>
            {getStatusIcon()}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {data?.tools?.length > 0
              ? `${data.tools.length} araç aktif`
              : "Konfigürasyon gerekli"}
          </div>
        </div>

        <div className="text-xs text-gray-500">
          <Settings className="w-4 h-4" />
        </div>

        <Handle
          type="target"
          position={Position.Left}
          id="input"
          className="w-16 !bg-teal-500"
        />
        <Handle
          type="source"
          position={Position.Right}
          id="output"
          className="w-3 h-3 bg-blue-500"
        />
      </div>

      {/* DaisyUI dialog modal */}
      <AgentConfigModal
        ref={modalRef}
        nodeData={data}
        onSave={handleConfigSave}
      />
    </>
  );
}

export default ToolAgentNode;
