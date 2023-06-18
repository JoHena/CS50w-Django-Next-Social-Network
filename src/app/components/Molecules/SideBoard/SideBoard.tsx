"use client";
import React from "react";
import SearchBar from "../../Atoms/SearchBAr/Searchbar";

interface ISideboard {}

const Sideboard: React.FC<ISideboard> = (props: ISideboard) => {
  return (
    <>
      <div className="hidden basis-1/3 flex-col gap-3 py-2 pl-6 md:flex">
        <SearchBar />
        <div className="bg-tran flex flex-col rounded-md p-4 text-white shadow-md">
          <h2 className="mb-5 w-fit border-b border-b-[#EDAE1D] px-2 pb-2 text-[1.3rem] font-bold">
            What&apos;s trending
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <div className="font-bold text-gray-400">Trending</div>
              <div className="font-bold">#SF6</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-gray-400">Trending</div>
              <div className="font-bold">#Yon!</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-gray-400">Trending</div>
              <div className="font-bold">#Spiderman</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sideboard;
