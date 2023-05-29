"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavLink from "../../Atoms/NavLink/NavLink";

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = (props: ISidebar) => {
  return (
    <nav className="static mr-10 flex h-[100vh] flex-col justify-between py-6">
      <div className="flex flex-col gap-6">
        <TwitterIcon fontSize="large" />
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
        </ul>
      </div>

      <button className="rounded-full bg-orange-400 px-24 py-3 font-bold">
        Tweet
      </button>
    </nav>
  );
};

export default Sidebar;
