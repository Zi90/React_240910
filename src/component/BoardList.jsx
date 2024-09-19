import React from 'react';
import { boardList } from '../data/data';
import '../component/board-style.css';
import { Link } from 'react-router-dom';

const BoardList = () => {
    return (
        <div className='boardList'>
            <h2>Board List Page</h2>
            <table>
                <thead>
                    <tr className='subTitle'>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map(b => (
                        <tr key={b.id}>
                            <td className='center'>{b.id}</td>
                            <td><Link to={`/detail/${b.id}`}>{b.title}</Link></td>
                            <td>{b.writer}</td>
                            <td>{b.reg_date.substring(0, b.reg_date.indexOf("T"))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <Link to={`/register`}><button className='textButton'>글쓰기</button></Link>
        </div>
    );
};

export default BoardList;