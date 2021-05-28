import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as api from '../utils/api';
import Votes from './Votes';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '@fontsource/roboto';

const Reviews = ({ reviews, setReviews }) => {
  const [sortOrder, setSortOrder] = useState();
  const [sortBy, setSortBy] = useState();
  const params = useParams();
  console.log(sortBy);

  const orderDropdownOptions = ['A-Z', 'Z-A'];
  const orderDefault = orderDropdownOptions[0];
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
    <div>
      <h2>{params.category ? params.category : 'All Reviews'}</h2>
      {/* {if (sortBy !== undefined || sortBy !== 'comments' || sortBy !== 'votes'){
        
      }} */}
      {/* <Dropdown
        options={orderDropdownOptions}
        value={orderDefault}
        placeholder="Order by"
        onChange={(event) => {
          console.log(event);
          event.value === 'A-Z' ? setSortOrder('ASC') : setSortOrder('DESC');
        }}
      /> */}
      <Dropdown
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
              ) : (
                <p>No Comments</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
