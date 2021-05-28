import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://joes-games.herokuapp.com/api'
});

export const fetchAllCategories = () => {
  return reviewsApi
    .get('/categories')
    .then((response) => response.data.categories);
};

export const fetchReviews = (category, { sortOrder }) => {
  // let path = '/reviews';
  // if (category) path += `?category=${category}`;
  return reviewsApi
    .get('/reviews', {
      params: {
        category: category,
        order: sortOrder
      }
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

  // .then((response) => console.log(response.data));
};

// export const patchCommentVotes = (id, increment) => {
//   return reviewsApi.patch(`/reviews/$`)
// };

export const fetchCommentsById = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const postComment = (review_id, username, body) => {
  return reviewsApi
    .post(`/reviews/${review_id}/comments`, { username, body })
    .then((response) => {
      console.log(response);
      return response.data.postedComment;
    });
};