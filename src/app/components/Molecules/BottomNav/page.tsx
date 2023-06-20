"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BottomNav: React.FC = (props) => {
  return (
    <nav className="sticky bottom-0 w-full border-t border-t-[#2e3642] bg-black pt-5 md:hidden">
      <ul className="flex w-full items-center justify-evenly text-lg">
        <div className="flex w-full items-center justify-center gap-4 border-b border-b-transparent pb-2 transition-colors hover:border-b-[#EDAE1D] xl:pl-2 xl:pr-4">
          <HomeIcon fontSize="large" />
        </div>
        <div className="flex w-full items-center justify-center gap-4 border-b border-b-transparent pb-2 transition-colors hover:border-b-[#EDAE1D] xl:pl-2 xl:pr-4">
          <SearchIcon fontSize="large" />
        </div>
        <div className="flex w-full items-center justify-center gap-4 border-b border-b-transparent pb-2 transition-colors hover:border-b-[#EDAE1D] xl:pl-2 xl:pr-4">
          <FavoriteIcon fontSize="large" />
        </div>
        <div className="flex w-full items-center justify-center gap-4 border-b border-b-transparent pb-2 transition-colors hover:border-b-[#EDAE1D] xl:pl-2 xl:pr-4">
          <AccountCircleIcon fontSize="large" />
        </div>
      </ul>
    </nav>
  );
};

export default BottomNav;
