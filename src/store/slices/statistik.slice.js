import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    result: 0,
    wrong: 0,
    percent: 0,
    counter: 1,
}

const statisticSlice = createSlice({
    name: 'statisticSlice',
    initialState,

    reducers: {
        changeResult: (state, action) => {
            state.result = action.payload
        },
        changePercent: (state, action) => {
            state.percent = action.payload
        },
        changeCounter: (state, action) => {
            state.counter = action.payload
        },
        changeWrong: (state, action) => {
            state.wrong = action.payload
        }
    }
});


const {actions: {changeResult, changePercent, changeCounter, changeWrong}} = statisticSlice;
const statisticAction = {changeResult, changePercent, changeCounter, changeWrong};

export {statisticAction};
export default statisticSlice.reducer