import Link from "next/link";
import React from "react";

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = (props: ISidebar) => {
  return (
    <nav className="mr-10 flex flex-col gap-3">
      <div>ICON</div>
      <ul className="flex flex-col gap-3 text-lg">
        <Link href={"Home"}>Home</Link>
        <Link href={"Following"}>Following</Link>
        <Link href={"Profile"}>Profile</Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
