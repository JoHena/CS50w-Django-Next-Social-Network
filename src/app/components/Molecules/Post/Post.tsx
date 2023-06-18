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
    <div className={`flex w-full gap-5 border-b ${personalize}`}>
      <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
