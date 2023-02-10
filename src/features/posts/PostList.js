import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const data = useSelector(selectAllPosts);
  const listView = data.map((detail) => {
    return (
      <div key={detail.id}>
        <p>Title : {detail.title}</p>
        <p>Content : {detail.content}</p>
        <p>
          <PostAuthor userID={detail.userID} />
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>postView</h1>
      {listView}
    </div>
  );
};

export default PostList;
