/*게시글 작성 페이지*/

import axios from "axios";
import { useEffect, useState } from 'react';
import './css/writePost.css';

const imageurl = "https://aikingsejong.s3.ap-northeast-2.amazonaws.com/urbanbrush-20220920114229006134.jpg";


function App(){

    //백엔드에서 가져온 데이터를 저장한다.
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
            //백엔드의 api/main(메인페이지) 엔드포인트를 불러옴.
          const response = await axios.get("/api/writePost");
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
      //fetchData는 서버로 네트워크 요청을 보내고 응답을 받을 수 있게 하는 메서드이다.
    }, []);


    return(

      
        <div>
        
        {/* 상단 회색 배경 */}
        <div className="top-section">
          {/* 내용 */}
        </div>

         {/* 아래쪽 흰색 배경 */}
         <div className="bottom-section">
          {/* 내용 */}
        </div>

        
      <div className="background-image" style={{backgroundImage: `url(${imageurl})`,backgroundSize: 'cover'}}>
        {/* 이미지 위의 텍스트 및 버튼 */}
    {/*title,subtitle*/ }
    <div className="titleSection">
            {/*div,span*/
            /*
            div와 span은 본질적으로는 같은 역활을 한다. 
            여러개의 태그들을 묶어주는 주머니 역활을 한다.
            */
           }
           <span className="title">게시글 작성</span>
           <span className="subtitle">갤러리에 글을 추가할 수 있습니다.</span>

        </div>
        {/*게시글 작성 부분*/}
        <div className="bulletinboard">
          
          {/*
          1.label은 for속성을 사용해 다른 요소와 결합할 수 있다.
          2.input: id는 javasctipt나 css에서의 id이고, name은 서버로 데이터를 전송할 때의 이름이다.
          required는 사용자가 폼을 제출할 때 이 입력 필드에 값이 반드시 있어야 한다.
          3.action="/submit_post"는 폼이 제출될 때 데이터가 전송될 url을 지정한다.
          4.button을 통해 submit하면 action을 통해 데이터가 제출된다.
          */}
          <form action="/submit_post" method="post"> 
            <label for="postTitle">제목:</label><br/>
            <input type="text" id="postTitle" name="postTitle" required/><br/>
            <label for="postContent">내용:</label><br/>{/*밑의 postContent에 대한 제목이다.*/ }
            <textarea id="postContent" name="postContent" rows="10" cols="100" required></textarea><br/>
            <button type="submit">게시글 작성</button>
        </form>
      </div>
    
    </div>
      </div>
    );


    

}




export default App;