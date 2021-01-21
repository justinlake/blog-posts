import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../utils/fetchUtils';

const Post = ({ body, id, title }) => {
    const dispatch = useDispatch();
    return (
        <div className="post">
            <h3 className="post-title">{ title }</h3>
            <p className="post-body">{ body }</p>
            <button
                className="btn btn-outline-danger delete-post-button"
                onClick={ () => dispatch(deletePost(id)) }
            >
                Delete Post
            </button>
        </div>
    );
};

Post.propTypes = {
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string
};

export default Post;
