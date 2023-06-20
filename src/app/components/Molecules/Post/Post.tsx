import Image from "next/image";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";

export interface IPost {
  id: number;
  user: string;
  username: string;
  content: string;
  likes: number[];
  total_likes: number;
  created_at: string;
  updated_at: string;
}

const Post: React.FC<IPost> = (props: IPost) => {
  const { username, content, total_likes, created_at } = props;
  return (
    <div
      className={`flex w-full gap-5 border-b border-[#2e3642] px-4 pb-2 pt-4`}
    >
      <div className="relative h-10 min-h-[2.4rem] w-10 min-w-[2.4rem]">
        <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
      </div>

      <div className="flex w-full flex-col">
        <div className="post-user">
          {username} <strong className="text-[#EDAE1D]">@{username}</strong>{" "}
        </div>

        <p className="inline-block whitespace-break-spaces break-all">
          awdwa-udaw wa iaw0diaw-0id-ia dwa waidawpdpojawopajwpodawjop
        </p>

        <div className="mt-2 flex w-full items-center justify-between">
          <div className="flex gap-2">
            <FavoriteIcon fontSize="small" />
            {total_likes}
          </div>
          <EditIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
