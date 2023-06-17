"use client";
import Sidebar from "../components/Molecules/SideBar/Sidebar";
import Sideboard from "../components/Molecules/SideBoard/SideBoard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center bg-black text-white">
      <Sidebar />
      {children}
      <Sideboard />
    </div>
  );
}
