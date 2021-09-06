import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleReview } from '../utils/api';
import Votes from './Votes';
import Comments from '../Components/Comments';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
dayjs.extend(relativeTime);

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetchSingleReview(params.review_id)
      .then((reviewFromApi) => {
        setReview(reviewFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  }, [params.review_id]);

  const date = dayjs().to(dayjs(review.created_at));

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div className="content">
      <Card style={{ backgroundColor: '#284444' }} className="singleReviewCard">
        <CardContent>
          <section className="votes">
            <Votes votes={review.votes} review_id={review.review_id} />
          </section>
          <article className="singleReviewInfo">
            <h2>{review.title}</h2>
            <p>{review.review_body}</p>
            <p>
              Posted by {review.owner} {date}
            </p>
          </article>
        </CardContent>
      </Card>
      <section>
        <Comments
          review_id={params.review_id}
          comment_count={review.comment_count}
        />
      </section>
    </div>
  );
};

export default SingleReview;
