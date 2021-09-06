import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://joes-games.herokuapp.com/api',
});

export const fetchAllCategories = () => {
  return reviewsApi
    .get('/categories')
    .then((response) => response.data.categories);
};

export const fetchReviews = (category, { sortBy, sortOrder }) => {
  return reviewsApi
    .get('/reviews', {
      params: {
        category: category,
        sort_by: sortBy,
        order: sortOrder,
      },
    })
    .then((response) => response.data.reviews);
};

export const fetchSingleReview = (review_id) => {
  return reviewsApi
    .get(`/reviews/${review_id}`)
    .then((response) => response.data.review);
};

export const patchVotes = (review_id, increment) => {
  return reviewsApi.patch(`/reviews/${review_id}`, { inc_votes: increment });
};

export const fetchCommentsById = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const postComment = (review_id, username, body) => {
  return reviewsApi
    .post(`/reviews/${review_id}/comments`, { username, body })
    .then((response) => {
      return response.data.postedComment;
    });
};
