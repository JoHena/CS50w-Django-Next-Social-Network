"use client";
import React from "react";
import Dashboard from "../../Molecules/Dashboard/dashboard";
import SquabbleLogo from "../../Atoms/SquabbleLogo/SquabbleLogo";
import Feed from "../Feed/Feed";

interface IMain {}

const Main: React.FC<IMain> = () => {
  return (
    <div className="flex h-full w-full flex-col items-center border-x border-[#2e3642] md:basis-3/5 xl:basis-1/3 xl:items-start">
      <h1 className="sticky top-0 z-40 flex w-full justify-center bg-black p-5 pt-3 text-xl font-bold md:justify-start ">
        <div className="hidden md:block">Home</div>
        <SquabbleLogo customize="md:hidden" />
      </h1>
      <Dashboard personalize="p-4 border-b border-[#EDAE1D]" />
      <Feed />
    </div>
  );
};

export default Main;
