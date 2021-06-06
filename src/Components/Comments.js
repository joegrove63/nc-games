import React, { useEffect, useState } from 'react';
import { fetchCommentsById } from '../utils/api';
import CommentAdder from '../Components/CommentAdder';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
dayjs.extend(relativeTime);

const Comments = ({ review_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchCommentsById(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id, setComments]);

  return (
    <div>
      <h2 className="commentTitle">{comment_count} Comments</h2>
      <ul className="commentGridContainer">
        {comments.map((comment) => {
          return (
            <Card style={{ backgroundColor: '#284444' }}>
              <CardContent>
                <li key={comment.comment_id}>
                  <h4 className="commentText">{comment.author}</h4>
                  <p>{comment.body}</p>
                  <p className="commentText">
                    Posted {dayjs().to(dayjs(comment.created_at))}
                  </p>
                </li>
              </CardContent>
            </Card>
          );
        })}
      </ul>
      <CommentAdder review_id={review_id} setComments={setComments} />
    </div>
  );
};

export default Comments;
