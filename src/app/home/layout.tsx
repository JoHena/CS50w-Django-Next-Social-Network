"use client";
import BottomNav from "../components/Molecules/BottomNav/page";
import Sidebar from "../components/Molecules/SideBar/Sidebar";
import Sideboard from "../components/Molecules/SideBoard/SideBoard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/as.png')]">
      <div className="flex flex-col justify-start bg-black/80 text-white md:flex-row lg:justify-center">
        <Sidebar />
        {children}
        <BottomNav />
        <Sideboard />
      </div>
    </div>
  );
}
