import React from "react";
import Dashboard from "../../Molecules/Dashboard/dashboard";
import Post from "../../Molecules/Post/Post";

interface IMain {}

const Main: React.FC<IMain> = () => {
  return (
    <div className="h-[100vh] w-full border-x border-[#28313d] lg:basis-1/3">
      <h1 className="p-4 pt-3 text-lg font-bold">Home</h1>
      <Dashboard personalize="p-4 border-b border-[#424e5c]" />
      <Post
        personalize="p-4 border-[#424e5c]"
        user="Yon"
        userAt="Yon"
        content="Thank you for 23K followers!"
      />
    </div>
  );
};

export default Main;
