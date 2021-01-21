import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../utils/fetchUtils';

const AddPostForm = () => {
    const [displayForm, setDisplayForm] = useState(false);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const body = formData.get('body');
        const title = formData.get('title');

        if (body && title) {
            dispatch(addPost({
                body,
                title
            }));
            setDisplayForm(false);
            setError(null);
        } else {
            setError('Error: Post title and/or body cannot be blank.');
        }
    };

    return (
        displayForm ? 
            <form className="add-post-form" onSubmit={ (e) => handleSubmit(e) }>
                <h4 className="add-post-title">Add New Post</h4>
                { error && 
                    <div className="alert alert-danger" role="alert">
                        { error }
                    </div>
                }
                <label className="form-label" htmlFor="title">Title:</label>
                <input className="form-control" id="title" name="title" type="text" />
                <label className="form-label" htmlFor="body">Body:</label>
                <textarea className="form-control" id="body" name="body" />
                <button className="btn btn-primary submit-form-button" type="submit">Add Post</button>
                <button
                    className="btn btn-outline-secondary cancel-button"
                    onClick={ () => setDisplayForm(false) }
                >
                    Cancel
                </button>
            </form>
        : <button className="add-post-button btn btn-secondary" onClick={ () => setDisplayForm(true) }>Add Post</button>
    );
};

export default AddPostForm;
