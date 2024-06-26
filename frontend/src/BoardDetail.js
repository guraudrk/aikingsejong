import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './css/BoardDetail.css';

function BoardDetail() {

  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const navigate = useNavigate();
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setCurrentUserId(storedUserId);
    } else {
      alert("로그인하지 않으면 게시물 조회를 할 수 없습니다. 로그인해주세요.");
      navigate("/main");
    }

    axios.get(`http://localhost:8080/api/board/${id}`)
      .then(response => {
        setBoard(response.data);
      })
      .catch(error => {
        console.error("게시글을 조회하는데 오류가 생겼습니다.", error);
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/board/${id}`)
      .then(() => {
        alert("게시물 삭제가 완료되었습니다.");
        navigate('/bulletinboard');
      })
      .catch(error => {
        console.error("게시글을 삭제하는데 오류가 생겼습니다.", error);
        alert("게시글을 삭제하는데 오류가 생겼습니다.");
      });
  };

  if (!board) return <div>로딩중입니다....</div>;

  return (
    <div className="background-image">
      <div className="board-detail-container">
        <h1>{board.title}</h1>
        <p>{board.content}</p>
        <small>{new Date(board.createdDate).toLocaleString()} by {board.userId}</small>
        {currentUserId === board.userId && (
          <button onClick={handleDelete} className="delete-button">삭제</button>
        )}
        <Link to="/bulletinboard" className="link-to-list">목록으로</Link>
      </div>
    </div>
  );
}

export default BoardDetail;