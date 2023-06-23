"use client";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import Feed from "../components/Organism/Feed/Feed";

export default function Page({ params }: { params: { profile: string[] } }) {
  console.log(params);
  return (
    <div className="flex h-full w-full flex-col items-center border-x border-[#2e3642] md:basis-3/5 xl:basis-1/3 xl:items-start">
      <h1 className="sticky top-0 z-40 flex w-full justify-center bg-black p-5 pt-3 text-xl font-bold md:justify-start ">
        <div className="hidden md:block">Doobus Goobus</div>
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
            <button className="rounded-full bg-[#EDAE1D] px-4 py-2 font-bold text-black transition-colors hover:text-[#EEF0F2] active:bg-[#4E598C] active:text-white disabled:bg-[#4E598C] disabled:text-white">
              Follow
            </button>
          </div>
        </div>

        <div className="pb-5">
          <div className="text-xl font-bold">Doobus Goobus</div>
          <div className="font-bold text-[#EDAE1D]">@Doobus Goobus</div>
        </div>

        <div className="mb-3">
          ▼22▼ Versatile Creator ▼Comission close⛧▼I dont draw NSFW▼ 🏳️‍🌈🇯🇵🇵🇭
        </div>

        <div className="flex gap-2">
          <div className="text-[#4E598C]">
            <strong className="text-[#EDAE1D]">1,3002</strong> Following
          </div>
          <div className="text-[#4E598C]">
            <strong className="text-[#EDAE1D]">2,330</strong> Followers
          </div>
        </div>
      </div>

      <Feed />
    </div>
  );
}
