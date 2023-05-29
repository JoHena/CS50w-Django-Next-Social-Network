import Image from "next/image";
import React from "react";

interface IPost {
  personalize: string;
  user: string;
  userAt: string;
  content: string;
}

const Post: React.FC<IPost> = (props: IPost) => {
  const { personalize, user, userAt, content } = props;
  return (
    <div className={`flex gap-5 border-b ${personalize}`}>
      <div className="w-12 h-12 relative">
        <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
      </div>

      <div className="flex flex-col">
        <div className="post-user">
          {user} <strong>@{userAt}</strong>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
