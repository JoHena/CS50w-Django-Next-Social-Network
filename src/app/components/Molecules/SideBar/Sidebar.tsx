import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import NavLink from "../../Atoms/NavLink/NavLink";
import LoginIcon from "@mui/icons-material/Login";
import { signIn, signOut, useSession } from "next-auth/react";
import SquabbleLogo from "../../Atoms/SquabbleLogo/SquabbleLogo";

const Sidebar: React.FC = (props) => {
  const { data: session } = useSession();
  return (
    <nav className="sticky top-0 hidden h-[100vh] items-center justify-between py-6 md:flex md:w-1/12 md:flex-col xl:mr-10 xl:basis-1/4 xl:items-end xl:pr-20">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-start gap-8">
          <ul className="flex w-full flex-col items-start gap-4 text-xl">
            <SquabbleLogo customize="xl:ml-2 mb-4" textClass="hidden" />

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
            className="mt-10 w-full rounded-full bg-[#EDAE1D] p-1 font-bold text-black transition-colors hover:text-[#EEF0F2] active:bg-[#4E598C] active:text-white xl:px-5"
            onClick={() => signIn()}
          >
            <div className="hidden xl:block">Sign In</div>
            <LoginIcon className="block xl:hidden" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
