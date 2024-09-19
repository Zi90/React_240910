import React, { useRef, useState } from 'react';
import { boardList } from '../data/data';
import { Link } from 'react-router-dom';

const BoardRegister = () => {
    const nextId = useRef(8);
    console.log(nextId);
    // 오늘 날짜 가져오기
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const [ boardListTmp, setBoardListTmp ] = useState([...boardList]);
    console.log(boardListTmp);

    const [ board, setBoard ] = useState({
        title: '',
        writer: '',
        content: '',
        reg_date: formattedDate
    });

    const { title, writer, content, reg_date } = board;

    const onChange = (e) => {
        const { name, value } = e.target;
        setBoard({
            ...board,
            [name]:value
        });
    }

    const onCreate = () => {
        const b = {
            id : nextId.current,
            title : title,
            writer : writer,
            content : content
        };
        setBoardListTmp(boardListTmp.concat(b));
        setBoard({
            title: '',
            writer: '',
            content: '',
            reg_date: formattedDate
        });
        nextId.current += 1;
    }
    return (
        <div className='boardRegister'>
            <h2>Board Register</h2>
            <div className='content'>
                <input type="text" className='content-box' name='reg_date' value={reg_date}/>
                <input type="text" className='content-box' name='title' placeholder='Title' onChange={onChange}/>
                <input type="text" className='content-box' name='writer' placeholder='Writer' onChange={onChange}/>
                <div className='contentContainer'>
                <textarea type="text" className='content-box' name='content' placeholder='Content' onChange={onChange}/>
                </div>
            </div>
            <Link to={'/'}><button onClick={onCreate}>Register</button></Link> 
        </div>
    );
};

export default BoardRegister;