import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './css/BoardDetail.css';


function BoardDetail(){

    const {id} = useParams();
    const [board,setBoard] = useState(null);
    const navigate = useNavigate(); //navigate를 정의한다.
    const [currentUser,setCurrentUser] = useState(null);


    useEffect(()=>{
        axios.get(`http://localhost:8080/api/board/${id}`) //백틱으로 해야 변수 치환이 가능하다.
        .then(response=>{
            setBoard(response.data);
        })
        .catch(error=>{
            console.error("게시글을 조회하는데 오류가 생겼습니다.",error);
        });

        axios.get('http://localhost:8080/api/currentUser')
        .then(response=>{
            setCurrentUser(response.data.userId);
        })
        .catch(error=>{
            console.error("사용자 정보를 가져오는 데에 오류가 생겼습니다.",error);
            alert("사용자 정보를 가져오는 데에 오류가 생겼습니다.")
        })
    },[id]);


    //삭제에 관한 함수

    const handleDelete =() =>{
        axios.delete(`http://localhost:8080/api/board/${id}`)
        .then(
            //삭제가 완료가 되면 게시판 페이지로 간다.
            ()=>{navigate('/bulletinboard');}
        )
        .catch(error=>{
            console.error("게시글을 삭제하는데 오류가 생겼습니다.",error);
            alert("게시글을 삭제하는데 오류가 생겼습니다.");
        })
    }

    if(!board) return <div>로딩중입니다....</div>;


    return (
        <div className="board-detail-container">
            <h1>{board.title}</h1>
            <p>{board.content}</p>
            <small>{new Date(board.createdDate).toLocaleString()} by {board.userId}</small>
            {currentUser === board.userId && (
                <button onClick={handleDelete} className="delete-button">삭제</button>
            )}
            <Link to="/bulletinboard">목록으로</Link>
        </div>
    );
}


export default BoardDetail;