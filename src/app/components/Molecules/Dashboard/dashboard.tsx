import React from "react";
import Image from "next/image";

interface INavbar {
  personalize?: string;
}

const Dashboard: React.FC<INavbar> = (props: INavbar) => {
  const { personalize } = props;
  return (
    <div className={`flex w-full gap-5 ${personalize}`}>
      <div className="relative h-10 w-12 lg:h-12 lg:w-14">
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
        <button className="rounded-full bg-orange-400 px-4 py-1 font-bold">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
