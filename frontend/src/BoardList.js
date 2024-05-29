import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/BoardList.css'

function BoardList(){

    //리스트를 받을 것이기 때문에, useState도 list이다.
    const [data,setdatas] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8080/api/board')
        .then(response=>{
            setdatas(response.data); //응답받은 데이터를 토대로 data를 set 한다.
            
        })
        .catch(error=>{
            console.error("게시판 정보를 불러오는 데 오류가 발생했습니다.",error);
        });
    },[]);


    return (
        <div className="board-list-container">
        <h1>게시판</h1>
        <ul className="board-list">
          {data.map(boardData => (
            <li key={boardData.id} className="board-list-item">
              <Link to={`/post/${boardData.id}`} className="board-list-link">
                <h2>{boardData.title}</h2>
                <p>{boardData.content.slice(0, 100)}...</p>
                <small>{new Date(boardData.createdDate).toLocaleString()}</small>
              </Link>
            </li>
          ))}
        </ul>
    
      </div>
    );
};

export default BoardList;