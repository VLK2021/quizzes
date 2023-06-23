import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    result: 0,
    wrong: 0,
    counter: 1,
    currentTime: null,
}

const statisticSlice = createSlice({
    name: 'statisticSlice',
    initialState,

    reducers: {
        changeResult: (state, action) => {
            state.result = action.payload
        },
        changeCounter: (state, action) => {
            state.counter = action.payload
        },
        changeWrong: (state, action) => {
            state.wrong = action.payload
        },
        changeCurrentTime: (state, action) => {
            state.currentTime = action.payload
        }
    }
});


const {actions: {changeResult, changeCounter, changeWrong, changeCurrentTime}} = statisticSlice;
const statisticAction = {changeResult, changeCounter, changeWrong, changeCurrentTime};

export {statisticAction};
export default statisticSlice.reducer