import {combineReducers, configureStore} from "@reduxjs/toolkit";

import categoryReducer from './slices/category.slice';
import questionReducer from './slices/question.clice';


const rootReducer = combineReducers({
    categories: categoryReducer,
    question: questionReducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;