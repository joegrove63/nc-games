import React, { useState } from 'react';
import { postComment } from '../utils/api';

const CommentAdder = ({ review_id, setComments }) => {
  const [comment, setComment] = useState();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // post request
        postComment(review_id, 'jessjelly', comment).then((postedComment) => {
          setComments((currComments) => {
            return [postedComment, ...currComments];
          });
          setComment('');
        });
        //update reviews
        //clear form
      }}
    >
      <input
        type="text"
        id="comment"
        placeholder="Leave a comment"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></input>
      <button>Post</button>
    </form>
  );
};

export default CommentAdder;
