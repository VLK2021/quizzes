import React from "react";
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Layout from "./Layout/Layout";
import {HomeComponent} from "./components";
import QuizComponent from "./components/QuizComponent/QuizComponent";


function App() {


    return (
        <div className="App width">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomeComponent/>}/>
                    <Route path={'quiz'} element={<QuizComponent/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
