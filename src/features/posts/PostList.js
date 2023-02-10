import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const data = useSelector(selectAllPosts);

  const orderList = data.slice().sort((a, b) => b.date.localeCompare(a.date));

  const listView = orderList.map((detail) => {

    return (
      <div key={detail.id}>
        <p>Title : {detail.title}</p>
        <p>Content : {detail.content}</p>
        <p>
          <PostAuthor userID={detail.userID} />
          <TimeAgo timestamp={detail.date} />
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
