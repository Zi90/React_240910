import React, { useState, useEffect } from 'react';
import { boardList } from '../data/data';
import { Link, useParams } from 'react-router-dom';

const BoardModify = () => {

    const [ boardListTmp, setBoardListTmp ] = useState([...boardList]);
    console.log(boardListTmp);

    const { id } = useParams();

    const [ mod, setMod ] = useState({
        title: '',
        writer: '',
        content: '',
        reg_date: ''
    });

    const { title, writer, contents, reg_date } = mod;

    useEffect(() => {
        const board = Number(id);
        const boardToModify = boardListTmp.find(I => I.id === board);
        setMod(boardToModify);
    }, [id, boardListTmp]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setMod({
            ...mod,
            [name]:value
        });
    }

    const onCreate = () => {
        const b = {
            id : id,
            title : title,
            writer : writer,
            content : contents
        };
        setBoardListTmp(boardListTmp.concat(b));
        setMod({
            title: '',
            writer: '',
            content: '',
            reg_date: ''
        });
    }
    return (
        <div className='boardRegister'>
            <h2>Board Modify</h2>
            <div className='content'>
                <input type="text" className='content-box' name='reg_date' value={reg_date.substring(0, reg_date.indexOf("T"))}/>
                <input type="text" className='content-box' name='title' placeholder='Title' value={title} onChange={onChange}/>
                <input type="text" className='content-box' name='writer' placeholder='Writer' value={writer} onChange={onChange}/>
                <div className='contentContainer'>
                <textarea type="text" className='content-box' name='content' placeholder='Content' value={contents} onChange={onChange}/>
                </div>
            </div>
            <Link to={'/'}><button onClick={onCreate}>Modify</button></Link> 
        </div>
    );
};

export default BoardModify;