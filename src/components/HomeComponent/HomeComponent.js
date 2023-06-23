import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';

import './HomeComponentStyle.css';
import {getAllCategories} from "../../store/slices/category.slice";
import {difficultArray} from "../../constants";
import {questionAction} from "../../store/slices/question.clice";


const HomeComponent = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {categoriesArr} = useSelector(store => store.categories);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch]);


    const submit = (data) => {
        dispatch(questionAction.changeId(data.category));
        dispatch(questionAction.changeDif(data.difficult));

        navigate('/quiz')
    }

    //логіка рандомного вибору вікторини
    const randomQuiz = () => {
        const randomIndexCategory = Math.floor(Math.random() * categoriesArr.length);
        const randomObjectCategory = categoriesArr[randomIndexCategory];
        dispatch(questionAction.changeId(randomObjectCategory.id));

        const randomIndexDifficult = Math.floor(Math.random() * difficultArray.length);
        const randomObjectDifficult = difficultArray[randomIndexDifficult];
        dispatch(questionAction.changeDif(randomObjectDifficult.name));

        navigate('/quiz')
    }

    return (
        <div className={'homeComponent width'}>
            <h1 className={'width margin-top'}>quizzes</h1>

            <div className={'form-block flex margin-top'}>
                <form className={'form width'} onSubmit={handleSubmit(submit)}>
                    <label>select category</label>
                    <select {...register('category')}>
                        {
                            categoriesArr &&
                            categoriesArr.map(obj => <option key={obj.id} value={obj.id}>{obj.name}</option>)
                        }
                    </select>

                    <label>select difficult</label>
                    <select {...register('difficult')}>
                        {
                            difficultArray.map(obj => <option key={obj.id} value={obj.name}>{obj.name}</option>)
                        }
                    </select>

                    <button>go to play quiz</button>
                </form>
            </div>

            <div className={'btn-lucky margin-top flex'}>
                <button onClick={randomQuiz}>I'm lucky</button>
            </div>
        </div>
    );
};

export {HomeComponent};