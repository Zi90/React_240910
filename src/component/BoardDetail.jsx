import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { boardList } from '../data/data';

const BoardDetail = () => {

    const { id } = useParams();

    // 특정 조건을 만족하는 요소의 index를 찾는 함수 findIndex()
    // boardList.findIndex(b => b.id === Number(id))
    // params는 String으로 값을 가져옴 ==> 따라서 Number로 형변환
    // 굳이 findIndex를 사용하는 이유는 id의 값과 index(boardList의 index)가 맞지 않기 때문

    const idx = boardList.findIndex(b => b.id === Number(id));
    console.log(idx);
    
    const board = boardList[idx];
    console.log(board);

    return (
        <div className='boardDetailBoard'>
            <h2>No.{board.id} / Board Detail Page</h2>
            <div className='boardDetailContainer'>
                <span className='boardTitle'>{board.title}</span>
                <span className='bold'>{board.writer} [{board.reg_date.substring(0, board.reg_date.indexOf("T"))}]</span>
                <div>{board.contents}</div>
            </div>
            <div>
                <Link to={`/modify/${board.id}`}><button>Modify</button></Link>
                <button>Remove</button>
                <Link to={'/list'}><button>List</button></Link>
            </div>
        </div>
    );
};

export default BoardDetail;