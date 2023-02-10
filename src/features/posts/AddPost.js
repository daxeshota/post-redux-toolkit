import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { addPost } from "./postSlice";

const AddPost = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");

  const postAdd = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content, userID));
    }
    setTitle("");
    setContent("");
  };

  const usersOption = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  
  const onUserChange = (e) => {
    setUserID(e.target.value);
  };
  
  const canSave = Boolean(title) && Boolean(content) && Boolean(userID);

  return (
    <div>
      <form onSubmit={postAdd}>
        <label htmlFor="user">User :</label>
        <select name="user" value={userID} onChange={onUserChange}>
          <option value=""></option>
          {usersOption}
        </select>
        <label htmlFor="title">Title :</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="cars">Content :</label>
        <input
          name="content"
          type="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={!canSave}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddPost;
