import React, { useState } from "react";
import CommentsForm from "./CommentsForm";

const ParentComponent = () => {
  const [comments, setComments] = useState("");

  const handleCommentUpdate = (newComment) => {
    setComments(newComment);
  };

  return (
    <div>
      <CommentsForm studentEmail={{ onCommentUpdate: handleCommentUpdate }} />
      <p>{comments}</p>
    </div>
  );
};

export default ParentComponent;