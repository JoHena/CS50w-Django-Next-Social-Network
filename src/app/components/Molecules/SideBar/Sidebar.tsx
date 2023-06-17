"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavLink from "../../Atoms/NavLink/NavLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

interface ISidebar {
  session: Session | null;
}

const Sidebar: React.FC<ISidebar> = (props: ISidebar) => {
  const { session } = props;
  return (
    <nav className="static mr-10 hidden h-[100vh] flex-col justify-between py-6 lg:flex">
      <div className="flex flex-col gap-6">
        <TwitterIcon fontSize="large" />
        <div className="text-lg text-white">@{session?.user?.name}</div>
        <ul className="flex flex-col gap-4 text-lg">
          <NavLink
            text="Home"
            href="Home"
            icon={<HomeIcon fontSize="large" />}
          />
          <NavLink
            text="Following"
            href="Following"
            icon={<BookmarkIcon fontSize="large" />}
          />
          <NavLink
            text="Profile"
            href="Profile"
            icon={<PersonIcon fontSize="large" />}
          />
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        </ul>
      </div>

      <button className="rounded-full bg-orange-400 px-24 py-3 font-bold">
        Tweet
      </button>
    </nav>
  );
};

export default Sidebar;
