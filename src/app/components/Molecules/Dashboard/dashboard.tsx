import React from "react";
import Image from "next/image";

interface INavbar {
  personalize?: string;
}

const Dashboard: React.FC<INavbar> = (props: INavbar) => {
  const { personalize } = props;
  return (
    <div className={`flex w-full gap-5 ${personalize}`}>
      <div className="relative h-10 min-h-[2.4rem] w-10 min-w-[2.4rem]">
        <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
      </div>

      <div className="flex w-full flex-col items-end gap-5">
        <input
          className="w-full appearance-none bg-transparent text-white focus:outline-none"
          type="text"
          placeholder="What's going on?"
          id="fname"
          name="fname"
        />
        <button className="rounded-full bg-[#EDAE1D] px-5 py-1 font-bold text-black transition-colors hover:text-[#EEF0F2] active:bg-[#4E598C] active:text-white">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
