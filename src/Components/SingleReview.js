import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleReview } from '../utils/api';
import Votes from './Votes';
import Comments from '../Components/Comments';

const SingleReview = ({ votesUpdate, setVotesUpdate }) => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetchSingleReview(params.review_id).then((reviewFromApi) => {
      setIsLoading(false);
      setReview(reviewFromApi);
    });
  }, [params.review_id, setIsLoading]);
  console.log(review.review_id);
  return (
    <div>
      <section>
        <h2>{review.title}</h2>
        <p>{review.review_body}</p>
        {!isLoading && (
          <p>
            Posted by {review.owner} on {review.created_at}
          </p>
        )}
        {!isLoading && <p>{review.comment_count} Comments</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Votes votes={review.votes} review_id={review.review_id} />
        )}
      </section>
      <section>
        <Comments review_id={params.review_id} />
      </section>
    </div>
  );
};

export default SingleReview;
