import React from "react";
import { ReactFlowProvider } from "reactflow";
import Navbar from "../components/canvas/Navbar";
import Sidebar from "../components/canvas/Sidebar";
import FlowCanvas from "../components/canvas/FlowCanvas";
import "reactflow/dist/style.css";

export default function App() {
  return (
    <ReactFlowProvider>
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar />
          <FlowCanvas />
        </div>
      </div>
    </ReactFlowProvider>
  );
}
