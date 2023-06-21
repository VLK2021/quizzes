import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {categoryService} from "../../services";


export const getAllCategories = createAsyncThunk(
    'categorySlice/getAllCategories',
    async (_, {rejectWithValue}) => {
        try {
            const categories = await categoryService.getAll();
            return categories
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    categoriesArr: [],
    status: null,
    error: null,
}


const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                state.status = 'Loading....'
                state.error = null
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.categoriesArr = action.payload.trivia_categories
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
});

export default categorySlice.reducer;