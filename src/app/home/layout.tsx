"use client";
import { useSession } from "next-auth/react";
import Sidebar from "../components/Molecules/SideBar/Sidebar";
import Sideboard from "../components/Molecules/SideBoard/SideBoard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center bg-black text-white">
      <Sidebar session={session} />
      {children}
      <Sideboard />
    </div>
  );
}
