import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Sidebar } from "../components/layout/Sidebar";

export const MainLayout: FC = () => {
  return (
    <div className="w-screen min-h-screen bg-dark-lighter">
      <Navbar />
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
