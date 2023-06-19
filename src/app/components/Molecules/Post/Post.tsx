import Image from "next/image";
import React from "react";

export interface IPost {
  id: number;
  user: string;
  username: string;
  content: string;
  likes: number;
  created_at: string;
  updated_at: string;
}

const Post: React.FC<IPost> = (props: IPost) => {
  const { user, username, content } = props;
  console.log(props);
  return (
    <div className={`flex w-full gap-5 border-b border-[#2e3642] p-4`}>
      <div className="relative h-10 w-10 lg:h-12 lg:w-12">
        <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
      </div>

      <div className="flex flex-col">
        <div className="post-user">
          {username} <strong>@{username}</strong>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
