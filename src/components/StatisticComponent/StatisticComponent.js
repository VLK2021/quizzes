import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import './StatisticComponentStyle.css';
import {statisticAction} from "../../store/slices/statistik.slice";


const StatisticComponent = () => {
    const {result, counter, wrong, currentTime} = useSelector(store => store.statistic);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToStart = () => {
        dispatch(statisticAction.changeResult(0));
        dispatch(statisticAction.changeCounter(1));
        dispatch(statisticAction.changeCurrentTime(null));
        dispatch(statisticAction.changeWrong(0));

        navigate('/')
    };


    return (
        <div className={'statisticComponent width'}>
            <p className={'statisticComponent-title'}>You results</p>

            <div className={'statisticComponent-info-block width flex'}>
                <div className={'information'}>
                    <p><span className={'text'}>Your time:</span>{currentTime}</p>
                    <p><span className={'text'}>Correct answer:</span>{result}</p>
                    <p><span className={'text'}>Wrong answer:</span>{wrong}</p>
                    <p><span className={'text'}>Questions:</span>{counter}</p>
                    <p><span className={'text'}>Interest:</span>{(result * 100) / 10} %</p>
                </div>
            </div>

            <div className={'statisticComponent-btn width flex'}>
                <button onClick={goToStart}>go to start</button>
            </div>
        </div>
    );
};

export {StatisticComponent};