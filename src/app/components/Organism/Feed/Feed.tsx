import React, { useEffect, useState } from "react";
import axios from "axios";
import Post, { IPost } from "../../Molecules/Post/Post";

const Feed: React.FC = (props) => {
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
  }, []);

  return (
    <div className="h-full w-full">
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
