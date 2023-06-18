import React from "react";
import Dashboard from "../../Molecules/Dashboard/dashboard";
import Post from "../../Molecules/Post/Post";

interface IMain {}

const Main: React.FC<IMain> = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center border-x border-[#2e3642] md:basis-1/2 lg:basis-1/3 lg:items-start">
      <h1 className="p-4 pt-3 text-lg font-bold">Home</h1>
      <Dashboard personalize="p-4 border-b border-[#2e3642]" />
      <Post
        personalize="p-4 border-[#2e3642]"
        user="Yon"
        userAt="Yon"
        content="Thank you for 23K followers!"
      />
    </div>
  );
};

export default Main;
