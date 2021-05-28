import React, { useEffect, useState } from 'react';
import { fetchCommentsById } from '../utils/api';
import CommentAdder from '../Components/CommentAdder';

const Comments = ({ review_id }) => {
  // console.log(review_id);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchCommentsById(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      // console.log(comments);
    });
  }, [review_id, setComments]);
  return (
    <div>
      <CommentAdder review_id={review_id} setComments={setComments} />
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p>{comment.body}</p>
              <p>Posted on {comment.created_at}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
