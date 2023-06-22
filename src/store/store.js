import {combineReducers, configureStore} from "@reduxjs/toolkit";

import categoryReducer from './slices/category.slice';
import questionReducer from './slices/question.clice';
import statisticReducer from './slices/statistik.slice';


const rootReducer = combineReducers({
    categories: categoryReducer,
    question: questionReducer,
    statistic: statisticReducer
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;