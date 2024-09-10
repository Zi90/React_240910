import React from 'react';
import { boardList } from '../data/data';
import '../component/board-style.css';

const BoardList = () => {
    return (
        <div className='boardList'>
            <h2>Board List Page</h2>
            <table>
                <thead>
                    <tr className='subTitle'>
                        <th>번호</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map(b => (
                        <tr key={b.id}>
                            <td className='center'>{b.id}</td>
                            <td>{b.title}</td>
                            <td>{b.contents}</td>
                            <td>{b.writer}</td>
                            <td>{b.reg_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BoardList;