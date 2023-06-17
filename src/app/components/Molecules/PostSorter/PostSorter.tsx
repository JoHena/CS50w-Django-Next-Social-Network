import React from "react";

interface IPost {
  personalize: string;
  user: string;
  userAt: string;
  content: string;
}

const PostSorter: React.FC<IPost> = (props: IPost) => {
  const { personalize, user, userAt, content } = props;
  return (
    <>
      <div className={personalize}></div>
    </>
  );
};

export default PostSorter;
