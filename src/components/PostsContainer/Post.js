// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLike] = useState(props.item.likes);
  const [comments] = useState(props.item.comments);

  function addLikes() {
    setLike(likes => likes + 1);
  }
  return (
    <div className="post-border">
      <PostHeader
        username={props.item.username}
        thumbnailUrl={props.item.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.item.imageUrl}
        />
      </div>
      <LikeSection likes={likes} addLikes={addLikes} />
      <CommentSection comments={comments} />
    </div>
  );
};

export default Post;
