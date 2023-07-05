"use client";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import Feed from "../components/Organism/Feed/Feed";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export interface IUser {
  id: number;
  username: string;
  followings: number[];
  followers: number[];
}

export default function Page({ params }: { params: { profile: string[] } }) {
  const [userInfo, setUserInfo] = useState<IUser>();
  const { data: session, status } = useSession();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/users/?username=${params.profile}`)
      .then(({ data }) => {
        setUserInfo(data.results[0]);
        console.log(session?.user?.followings.includes(userInfo?.id!));
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = () => {
    const data = {
      user: session?.user?.user_id,
    };

    axios
      .patch(`http://127.0.0.1:8000/api/users/${userInfo?.id}/follow/`, data)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="flex h-full w-full flex-col items-center border-x border-[#2e3642] md:basis-3/5 xl:basis-1/3 xl:items-start">
      <h1 className="sticky top-0 z-40 flex w-full justify-center bg-black p-5 pt-3 text-xl font-bold md:justify-start ">
        <div className="hidden md:block">{params.profile}</div>
      </h1>

      <div className="relative h-48 w-full">
        <Image className="" src={"/DefaultPFbg2.jpg"} fill alt="wad" />
      </div>

      <div className="w-full border-b border-[#EDAE1D] px-4 pb-4 text-sm">
        <div className="relative flex items-center justify-end pb-10 pt-3">
          <div className="absolute bottom-4 left-1">
            <div className="relative h-32 w-32">
              <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
            </div>
          </div>

          <div className="ml-2 flex items-center gap-3">
            <MenuIcon />
            <EmailIcon />
            <button
              className={
                "rounded-full px-4 py-2 font-bold transition-colors " +
                (session?.user?.followings.includes(userInfo?.id!)
                  ? "bg-[#065A82] text-white hover:bg-[red] hover:text-white hover:after:content-[Unfollow]"
                  : `bg-[#EDAE1D] text-black hover:text-[#EEF0F2] active:bg-[#065A82]
                   active:text-white disabled:bg-[#065A82] disabled:text-white`)
              }
              disabled={
                status == "unauthenticated" ||
                session?.user?.user_id == userInfo?.id!
              }
              onClick={handleButtonClick}
            >
              {session?.user?.followings.includes(userInfo?.id!)
                ? "Following"
                : "Follow"}
            </button>
          </div>
        </div>

        <div className="pb-5">
          <div className="text-xl font-bold">{params.profile}</div>
          <div className="font-bold text-[#EDAE1D]">@{params.profile}</div>
        </div>

        <div className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex
          deserunt repellendus possimus quaerat impedit necessitatibus laborum
          odio? Suscipit assumenda accusamus incidunt. Mollitia, eligendi sed
          magni exercitationem laborum veniam doloribus!
        </div>

        <div className="flex gap-2">
          <div className="text-[#4E598C]">
            <strong className="text-[#EDAE1D]">
              {userInfo?.followings.length}
            </strong>{" "}
            Following
          </div>
          <div className="text-[#4E598C]">
            <strong className="text-[#EDAE1D]">
              {userInfo?.followers.length}
            </strong>{" "}
            Followers
          </div>
        </div>
      </div>

      {userInfo && <Feed user={userInfo?.id} />}
    </div>
  );
}
