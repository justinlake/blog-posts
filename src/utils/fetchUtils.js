import { addPostSuccess, deletePostSuccess, fetchPostsError, fetchPostsPending, fetchPostsSuccess } from '../actions/blogActions';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const addPost = (data) => {
    return (dispatch) => {
        // Issue: API will add post with { id: 101 } for all posts 
        // since it doesn't actually update server data
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                body: data.body,
                title: data.title,
                userId: 1 // keep it simple, set to static userId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                dispatch(addPostSuccess({
                    body: data.body,
                    id: Math.floor(Math.random() * 100000 + 100), // circumvent API, generate random ID over 100
                    title: data.title,
                    userId: 1 // keep it simple, set to static userId
                }));
            })
            .catch((error) => {
                console.error('Error adding post:\n', error);
                dispatch(fetchPostsError(error));
            });
    }
};

export const deletePost = (id) => {
    return (dispatch) => {
        fetch(`${url}/${id}`, { method: 'DELETE' })
            .then(() => {
                dispatch(deletePostSuccess(id));
            })
            .catch((error) => {
                console.error('Error deleting post:\n', error);
                dispatch(fetchPostsError(error));
            });
    };
};

export const fetchPosts = (query) => {
    const params = new URLSearchParams(query);
    return (dispatch) => {
        dispatch(fetchPostsPending());
        fetch(`${url}?${params}`)
            .then((response) => response.json())
            .then((posts) => {
                dispatch(fetchPostsSuccess(posts));
                return posts;
            })
            .catch((error) => {
                console.error('Error fetching posts:\n', error);
                dispatch(fetchPostsError(error));
            });
    };
};
