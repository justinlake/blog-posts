import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './utils/fetchUtils';
import Header from './components/Header';
import Post from './components/Post';

const App = () => {
    const posts = useSelector((state) => state.blogReducer.postList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts({ _page: 1 }));
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            { posts && posts.map((post) => (
                <Post
                    body={ post.body }
                    id={ post.id }
                    key={ post.id }
                    title={ post.title }
                    userId={ post.userId }
                />
            )) }
        </div>
    );
};

export default App;
