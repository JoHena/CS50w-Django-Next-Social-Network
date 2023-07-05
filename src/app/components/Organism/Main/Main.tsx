"use client";
import React, { useState } from "react";
import Dashboard from "../../Molecules/Dashboard/dashboard";
import SquabbleLogo from "../../Atoms/SquabbleLogo/SquabbleLogo";
import Feed from "../Feed/Feed";
import { useSession } from "next-auth/react";

interface IMain {
  onlyFollowing: boolean;
}

const Main: React.FC<IMain> = (props: IMain) => {
  const { onlyFollowing } = props;
  const { data: session } = useSession();
  const [codeValue, setCodeValue] = useState(0);

  return (
    <div className="flex h-full w-full flex-col items-center border-x border-[#2e3642] md:basis-3/5 xl:basis-1/3 xl:items-start">
      <h1 className="sticky top-0 z-40 flex w-full justify-center bg-black p-5 pt-3 text-xl font-bold md:justify-start ">
        <div className="hidden md:block">Home</div>
        <SquabbleLogo customize="md:hidden" />
      </h1>

      {!onlyFollowing && session && (
        <Dashboard
          user={session?.user?.user_id}
          personalize="p-4 border-b border-[#EDAE1D]"
          setCodeValue={setCodeValue}
        />
      )}

      <Feed
        onlyFollowing={onlyFollowing}
        user={onlyFollowing ? session?.user?.user_id : undefined}
        code={codeValue}
      />
    </div>
  );
};

export default Main;
