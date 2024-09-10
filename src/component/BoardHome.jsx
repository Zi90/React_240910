import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardList from './BoardList';
import '../component/board-style.css';

const BoardHome = () => {
    return (
        <div className='boardHome'>
            <h1 className='title'>My First React Board Project</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BoardList/>}/>
                    <Route path='/list' element={<BoardList/>}/>
                    <Route />
                    <Route />
                </Routes>
            </BrowserRouter>
            <button className='textButton'>글쓰기</button>
        </div>
    );
};

export default BoardHome;