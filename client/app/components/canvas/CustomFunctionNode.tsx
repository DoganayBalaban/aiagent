import React, { useRef } from "react";
import { useReactFlow, Handle, Position } from "reactflow";
import { Code2 } from "lucide-react";
import CustomFunctionModal from "./modals/CustomFunctionModal";

interface CustomFunctionNodeProps {
  data: any;
  id: string;
}

function CustomFunctionNode({ data, id }: CustomFunctionNodeProps) {
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
    console.log(newConfig);
  };

  return (
    <>
      <div
        className={`relative flex items-center gap-3 px-4 py-4 rounded-2xl border-2 text-gray-700 font-medium cursor-pointer transition-all border-purple-400 bg-purple-100 hover:bg-purple-200`}
        onDoubleClick={handleOpenModal}
        title="Çift tıklayarak konfigüre edin"
      >
        <div className="bg-purple-500 p-3 rounded-2xl">
          <Code2 className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          <p className="font-semibold">{data?.name || "Custom Function"}</p>
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
          className="w-3 h-3 bg-purple-500"
        />
      </div>

      <CustomFunctionModal
        ref={modalRef}
        nodeData={data}
        onSave={handleConfigSave}
      />
    </>
  );
}

export default CustomFunctionNode;
