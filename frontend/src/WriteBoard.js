import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/WriteBoard.css';


function WriteBoard(){

const [title,setTitle] = useState('');
const [content,setContent] = useState('');
const [userId, setUserId] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  axios.get('http://localhost:8080/api/currentUser') //세션을 받아와서 사용자의 아이디를 받아온다.
  .then(response => {
      setUserId(response.data.userId); //userid 변수에 아이디를 저장한다.
      console.log(response.data.userId);
      if (!response.data.userId) {
          alert("로그인이 필요합니다."); //로그인 정보가 없으면 로그인 페이지로 돌려보낸다.
          navigate('/login'); //navigate을 사용해서 페이지를 이동시킨다. navigate는link와 다르게 특정 행동을 했을 때 해당 주소로 이동할 수 있게 만들어준다.
      }
  })
  .catch(error => {
    
      console.error("사용자 정보를 가져오는 데 오류가 생겼습니다.", error);
  });
}, [navigate]);

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8080/api/board', { title, content, userId })
  .then(() => {
      alert('게시글을 작성했습니다.');
      navigate('/bulletinboard');  //게시글 페이지로 이동한다.
  })
  .catch(error => {
      console.error('게시글을 작성하는 데에 오류가 발생했습니다.', error);
  });
};

return (
    <div className="write-post-container">
      <h1>글 쓰기</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            제목:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            내용:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="10"
              required
            />
          </label>
        </div>
        <button type="submit" className="submit-button">제출</button>
      </form>
    </div>
);
};

export default WriteBoard;