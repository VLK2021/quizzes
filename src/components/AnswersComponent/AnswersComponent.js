import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import './AnswersComponentStyle.css';
import {statisticAction} from "../../store/slices/statistik.slice";


const AnswersComponent = ({answerArray, correct_answer, time, setIsSelected}) => {
    const {result, counter, wrong} = useSelector(store => store.statistic);
    const {register, setValue} = useForm();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    //обнуляємо значення інпуту
    useEffect(() => {
        setValue('radioOption', '');
    }, [counter]);


    const submit = (data) => {
        if (data.radioOption === correct_answer) {
            dispatch(statisticAction.changeResult(result + 1));
        } else {
            dispatch(statisticAction.changeWrong(wrong + 1));
        }
        if (counter === 10) {
            dispatch(statisticAction.changeCurrentTime(time))
            navigate('/statistic')
        }
    };

    const handleRadioChange = (e) => {
        const selectedOption = e.target.value;
        setValue('radioOption', selectedOption);
        submit({radioOption: selectedOption});
        setIsSelected(true);
    };


    return (
        <div className={'answersComponent width margin-top'}>
            <form>
                {
                    answerArray.length > 0 &&
                    answerArray.map((obj, index) =>
                        <div key={index} className={`width answersComponent-block`}>
                            <input type="radio"
                                   value={obj}
                                   {...register(`radioOption`)}
                                   onChange={handleRadioChange}
                            /> <span>{obj}</span>
                        </div>
                    )
                }
            </form>
        </div>
    );
};

export {AnswersComponent};