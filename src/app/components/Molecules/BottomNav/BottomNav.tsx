"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

const BottomNav: React.FC = (props) => {
  return (
    <nav className="sticky bottom-0 w-full border-t border-t-[#2e3642] bg-black pt-5 md:hidden">
      <ul className="flex w-full items-center justify-evenly text-lg">
        <Link
          href="home"
          className="flex w-full items-center justify-center border-b border-b-transparent pb-2 active:text-[#EDAE1D]"
        >
          <HomeIcon fontSize="large" />
        </Link>
        <Link
          href=""
          className="flex w-full items-center justify-center border-b border-b-transparent pb-2 active:text-[#EDAE1D]"
        >
          <SearchIcon fontSize="large" />
        </Link>
        <Link
          href=""
          className="flex w-full items-center justify-center border-b border-b-transparent pb-2 active:text-[#EDAE1D]"
        >
          <FavoriteIcon fontSize="large" />
        </Link>
        <Link
          href=""
          className="flex w-full items-center justify-center border-b border-b-transparent pb-2 duration-0 active:text-[#EDAE1D]"
        >
          <AccountCircleIcon fontSize="large" />
        </Link>
      </ul>
    </nav>
  );
};

export default BottomNav;
