import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './css/WriteBoard.css';


function WriteBoard(){

const [title,setTitle] = useState('');
const [content,setContent] = useState('');
const history = useHistory();

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/api/board',{title,content})
    .then(()=>{
        history.push('/');
    })
    .catch(error=>{
        console.error('게시글을 작성하는 데에 오류가 발생했습니다.',error);
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