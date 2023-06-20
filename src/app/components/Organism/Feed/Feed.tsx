import React, { useEffect, useState } from "react";
import axios from "axios";
import Post, { IPost } from "../../Molecules/Post/Post";

interface IFeed {
  code: number;
}

const Feed: React.FC<IFeed> = (props: IFeed) => {
  const { code } = props;
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [code]);

  return (
    <div className="h-full w-full">
      <div hidden>{code}</div>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
