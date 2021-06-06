import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as api from '../utils/api';
import Votes from './Votes';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

dayjs.extend(relativeTime);

const Reviews = ({ reviews, setReviews }) => {
  const [sortOrder, setSortOrder] = useState();
  const [sortBy, setSortBy] = useState();
  const params = useParams();

  const sortByDropdownOptions = [
    'Latest',
    'Oldest',
    'Top Voted',
    'Lowest Voted',
    'Most Comments',
    'Least Comments'
  ];
  const sortBydefault = sortByDropdownOptions[0];

  useEffect(() => {
    api
      .fetchReviews(params.category, { sortBy, sortOrder })
      .then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
      });
  }, [setReviews, params.category, sortOrder, sortBy]);

  return (
    <div className="content">
      <header className="containerReviewsHeaderDropd">
        <h2 className="reviewsHeader">
          {params.category
            ? params.category.charAt(0).toUpperCase() + params.category.slice(1)
            : 'All Reviews'}
        </h2>
        <Dropdown
          className="dropdown"
          options={sortByDropdownOptions}
          value={sortBydefault}
          placeholder="Sort by"
          onChange={(event) => {
            if (event.value === 'Latest') {
              setSortOrder('DESC');
              setSortBy('created_at');
            } else if (event.value === 'Oldest') {
              setSortOrder('ASC');
              setSortBy('created_at');
            } else if (event.value === 'Top Voted') {
              setSortOrder('DESC');
              setSortBy('votes');
            } else if (EventTarget.value === 'Lowest Voted') {
              setSortOrder('ASC');
              setSortBy('votes');
            } else if (event.value === 'Most Comments') {
              setSortOrder('DESC');
              setSortBy('comment_count');
            } else if (event.value === 'Least Comments') {
              setSortOrder('ASC');
              setSortBy('comment_count');
            }
          }}
        />
      </header>

      <ul className="reviewGridContainer">
        {reviews.map((review) => {
          return (
            <div>
              <Card style={{ backgroundColor: '#284444' }}>
                <CardContent>
                  <li key={review.review_id}>
                    <p>
                      Posted by {review.owner}{' '}
                      {dayjs().to(dayjs(review.created_at))}
                    </p>
                    <Link to={`/reviews/${review.review_id}`}>
                      <h3>{review.title}</h3>
                    </Link>
                    <p>{review.category}</p>
                    <Votes votes={review.votes} review_id={review.review_id} />
                    {review.comment_count > 0 ? (
                      <Link to={`/reviews/${review.review_id}`}>
                        <p>{review.comment_count} Comments</p>
                      </Link>
                    ) : (
                      <p>No Comments</p>
                    )}
                  </li>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
