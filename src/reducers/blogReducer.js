import {
    ADD_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POSTS_PENDING,
    FETCH_POSTS_SUCCESS
} from '../actions/blogActions';

const initialState = {
    error: null,
    pending: false,
    postList: []
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_SUCCESS:
            return {
                ...state,
                postList: [action.payload, ...state.postList ]
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                postList: state.postList.filter((post) => post.id !== action.payload)
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                error: action.error,
                pending: false
            }
        case FETCH_POSTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                pending: false,
                postList: action.payload
            }
        default:
            return state;
    }
}

export default blogReducer;
