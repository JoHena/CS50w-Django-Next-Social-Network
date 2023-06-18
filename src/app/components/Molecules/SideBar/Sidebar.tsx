"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import NavLink from "../../Atoms/NavLink/NavLink";
import LoginIcon from "@mui/icons-material/Login";
import { signIn, signOut, useSession } from "next-auth/react";
import TextsmsIcon from "@mui/icons-material/Textsms";

const Sidebar: React.FC = (props) => {
  const { data: session } = useSession();
  return (
    <nav className="static mr-10 hidden h-[100vh] w-1/12 flex-col items-end justify-between py-6 md:flex lg:basis-1/3 lg:items-end lg:pr-20">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-3 text-[#F0BC42]">
            <TextsmsIcon color="inherit" fontSize="large" />
            <div className="hidden pb-2 text-lg font-bold lg:block">
              Squabble
            </div>
          </div>

          <ul className="flex w-full flex-col items-start gap-4 text-lg">
            <NavLink
              text="Home"
              href="home"
              icon={<HomeIcon fontSize="large" />}
              customize="font-bold"
            />

            {session && (
              <>
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
              </>
            )}
          </ul>
        </div>
        {!session && (
          <button
            className="mt-10 w-full rounded-full bg-[#EDAE1D] p-1 font-bold text-black transition-colors hover:text-[#EEF0F2] active:bg-[#4E598C] active:text-white lg:px-5"
            onClick={() => signIn()}
          >
            <div className="hidden lg:block">Sign In</div>
            <LoginIcon className="block lg:hidden" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
