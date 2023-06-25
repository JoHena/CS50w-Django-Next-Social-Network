import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "@/app/components/Molecules/Post/Post";
import PaginatorBar from "@/app/components/Atoms/PaginatorBar/PaginatorBar";
import { Pagerequest } from "@/app/typing";

interface IFeed {
  code?: number;
  user?: string;
}

const Feed: React.FC<IFeed> = (props: IFeed) => {
  const { code, user } = props;
  const [data, setData] = useState<Pagerequest>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/api/posts/" +
          (user ? `?page=${page}&?user=${user}` : `?page=${page}`)
      )
      .then(({ data }) => {
        setData(data);
        console.log(page);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [code, user, page]);

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
