import Image from "next/image";
import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { IPost } from "@/app/typing";
import axios from "axios";
import { useSession } from "next-auth/react";

const Post: React.FC<IPost> = (props: IPost) => {
  const { id, username, content, likes, total_likes } = props;
  const { data: session } = useSession();

  const [totalLikes, setTotalLikes] = React.useState<number>(0);
  const [likedby, setLikedby] = React.useState<number[]>([]);

  useEffect(() => {
    setLikedby(likes);
    setTotalLikes(total_likes);
  }, [total_likes, likes]);

  function likePost() {
    axios
      .patch(`http://127.0.0.1:8000/api/posts/${id}/likePost/`, {
        user: session?.user?.user_id,
      })
      .then(({ data }) => {
        setTotalLikes(data["total_likes"]);
        setLikedby(data["likes"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      className={`flex w-full gap-5 border-b border-[#2e3642] px-4 pb-2 pt-4`}
    >
      <div className="relative h-10 min-h-[2.4rem] w-10 min-w-[2.4rem]">
        <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
      </div>

      <div className="flex w-full flex-col">
        <Link href={`/${username}`} as={`/${username}`} className="post-user">
          {username} <strong className="text-[#EDAE1D]">@{username}</strong>{" "}
        </Link>

        <p className="inline-block whitespace-break-spaces break-all">
          {content}
        </p>

        <div className="mt-2 flex w-full items-center justify-between">
          <div className="flex gap-2">
            <button
              className="appearance-none"
              onClick={session ? likePost : () => {}}
            >
              <FavoriteIcon
                fontSize="small"
                className={
                  likedby.includes(session?.user?.user_id!)
                    ? "text-[#EDAE1D]"
                    : "transition-all hover:text-[#EDAE1D]"
                }
                onClick={() => {
                  likePost;
                }}
              />
            </button>
            {totalLikes}
          </div>
          <EditIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
