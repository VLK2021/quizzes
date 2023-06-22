import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {quizService} from "../../services";


export const getQuestions = createAsyncThunk(
    'questionSlice/getQuestions',
    async ({id, dif}, {rejectWithValue}) => {
        try {
            const questions = await quizService.getQuiz(id, dif);
            return questions
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    questionArr: [],
    status: null,
    error: null,
    id: 9,
    dif: 'easy'
}


const questionSlice = createSlice({
    name: 'questionSlice',
    initialState,

    reducers: {
        changeId: (state, action) => {
            state.id = action.payload
        },
        changeDif: (state, action) => {
            state.dif = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state) => {
                state.status = 'Loading....'
                state.error = null
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.questionArr = action.payload.results
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
});

const {actions: {changeId, changeDif}} = questionSlice;
const questionAction = {changeId, changeDif};

export {questionAction};
export default questionSlice.reducer;