import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as api from '../utils/api';
import Votes from './Votes';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Reviews = ({ reviews, setReviews }) => {
  const [sortOrder, setSortOrder] = useState('DESC');
  const params = useParams();

  const orderDropdownOptions = ['A-Z', 'Z-A'];
  const orderDefault = orderDropdownOptions[0];
  const sortByDropdownOptions = [
    'Date/Time posted',
    'Title',
    'Votes',
    'Comments',
    'User'
  ];
  const sortBydefault = sortByDropdownOptions[0];

  useEffect(() => {
    api.fetchReviews(params.category, { sortOrder }).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [setReviews, params.category, sortOrder]);
  return (
    <div>
      <h2>{params.category ? params.category : 'All Reviews'}</h2>
      <Dropdown
        options={orderDropdownOptions}
        onChange={(event) => {
          console.log(event);
          event.value === 'A-Z' ? setSortOrder('ASC') : setSortOrder('DESC');
        }}
        value={orderDefault}
        placeholder="Order by"
      />
      ;
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/reviews/${review.review_id}`}>
                <h3>{review.title}</h3>
              </Link>

              <p>{review.owner}</p>
              <p>{review.category}</p>
              <p>{review.created_at}</p>
              <Votes votes={review.votes} review_id={review.review_id} />
              {review.comment_count > 0 ? (
                <Link to={`/reviews/${review.review_id}`}>
                  <p>{review.comment_count} Comments</p>
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
