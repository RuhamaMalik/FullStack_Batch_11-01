// src/layout/DashboardLayout.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  //  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar//////////////  */}
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* /// main contrnt */}
      {/*  marginLeft: ${collapsed ? "4.5rem" : "13.75rem"} */}
      <div className={`flex flex-col flex-1 `}>

        {/* //// responsive topbar */}
        <Topbar setIsMobileOpen={setIsMobileOpen} />

        {/* //////// dashboard content /////// */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
