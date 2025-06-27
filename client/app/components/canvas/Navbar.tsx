import { ArrowLeft, Save, Settings } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("isimsiz dosya");
  const handleRouteBack = () => {
    navigate(-1);
  };
  return (
    <header className="w-full h-16 bg-[#F5F5F5] shadow-lg shadow-[#616161]">
      <nav className="flex justify-between items-center p-4 bg-[#FFFFFF] text-[#616161] m-auto">
        <div>
          <ArrowLeft className="text-black cursor-pointer w-10 h-10 p-2 rounded-4xl hover:bg-[#6a6969] transition duration-500" onClick={handleRouteBack}/>
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Dosya Adı"
            autoFocus
            required
            className="text-3xl border-b-2 border-[#616161] w-full text-center focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4 gap-2">
          <div>
            <Save className="text-black hover:text-white cursor-pointer w-10 h-10 p-2 rounded-4xl hover:bg-[#6a6969] transition duration-500" />
          </div>
          <div className="text-xs text-[#616161]">
            <Settings className="text-black hover:text-white cursor-pointer w-10 h-10 p-2 rounded-4xl hover:bg-[#6a6969] transition duration-500" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
