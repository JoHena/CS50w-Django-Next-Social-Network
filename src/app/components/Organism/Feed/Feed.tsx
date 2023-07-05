import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "@/app/components/Molecules/Post/Post";
import PaginatorBar from "@/app/components/Atoms/PaginatorBar/PaginatorBar";
import { Pagerequest } from "@/app/typing";

interface IFeed {
  code?: number;
  user?: number;
  onlyFollowing?: boolean;
}

const Feed: React.FC<IFeed> = (props: IFeed) => {
  const { code, user, onlyFollowing } = props;
  const [data, setData] = useState<Pagerequest>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    function setUrl(onlyFollowing?: boolean) {
      if (onlyFollowing) {
        return `http://127.0.0.1:8000/api/posts/${user}/getFollowers/?page=${page}`;
      }

      return (
        "http://127.0.0.1:8000/api/posts/" +
        (user ? `?page=${page}&user=${user}` : `?page=${page}`)
      );
    }

    axios
      .get(setUrl(onlyFollowing))
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [code, user, page, onlyFollowing]);

  return (
    <>
      <div className="h-full w-full">
        {data?.results.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>

      {(data?.next || data?.previous) && (
        <PaginatorBar currentPage={page} pageInfo={data} setPage={setPage} />
      )}
    </>
  );
};

export default Feed;
