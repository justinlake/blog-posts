import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore);

const configureStore = (initialState) => {
    const store = createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

export default configureStore;
