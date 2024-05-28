import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './css/BoardDetail.css';


function BoardDetail(){

    const {id} = useParams();
    const [board,setBoard] = useState(null);



    useEffect(()=>{
        axios.get(`http://localhost:8080/api/board/${id}`) //백틱으로 해야 변수 치환이 가능하다.
        .then(response=>{
            setBoard(response.data);
        })
        .catch(error=>{
            console.error("게시글을 조회하는데 오류가 생겼습니다.",error);
        });
    },[id]);


    if(!board) return <div>로딩중입니다....</div>;


    return (
        <div className="board-detail-container">
        <h1>{board.title}</h1>
        <p>{board.content}</p>
        <small>{new Date(board.createdDate).toLocaleString()}</small>
        <div className="back-link-container">
          <Link to="/" className="back-link">뒤로 가기</Link>
        </div>
      </div>
    )
}


export default BoardDetail;