// src/layout/DashboardLayout.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar//////////////  */}
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* /// main contrnt */}
      <div className="flex-1 flex flex-col">

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
