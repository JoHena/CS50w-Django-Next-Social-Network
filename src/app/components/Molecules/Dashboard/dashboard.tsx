import React from "react";
import Image from "next/image";

interface INavbar {
  personalize?: string;
}

const Dashboard: React.FC<INavbar> = (props: INavbar) => {
  const { personalize } = props;
  return (
    <div className={`w-full flex gap-5 ${personalize}`}>
      <div className="w-14 h-12 relative">
        <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
      </div>

      <div className="w-full flex flex-col items-end gap-5">
        <input
          className="w-full appearance-none focus:outline-none bg-transparent text-white"
          type="text"
          placeholder="What's going on?"
          id="fname"
          name="fname"
        />
        <button className="bg-orange-400 font-bold px-4 py-1 rounded-full">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
