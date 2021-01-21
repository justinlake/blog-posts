export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const addPostSuccess = (post) => ({
    type: ADD_POST_SUCCESS,
    payload: post
});

export const deletePostSuccess = (id) => ({
    type: DELETE_POST_SUCCESS,
    payload: id
});

export const fetchPostsError = (error) => ({
    type: FETCH_POSTS_ERROR,
    payload: error
});

export const fetchPostsPending = () => ({
    type: FETCH_POSTS_PENDING
});

export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts
});
