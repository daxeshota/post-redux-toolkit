import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostAuthor = ({ userID }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === Number(userID));
  
  return (
    <>
      <span>by {author ? author.name : "Unknowm author"}</span>
    </>
  );
};

export default PostAuthor;
