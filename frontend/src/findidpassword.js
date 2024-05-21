import axios from "axios";
import { useEffect, useState } from 'react';
import './css/findidpassword.css';


const imageurl = "https://aikingsejong.s3.ap-northeast-2.amazonaws.com/0628_1-1.jpg";


function App() {





  //백엔드에서 가져온 데이터를 저장한다.
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
            //백엔드의 api/main(메인페이지) 엔드포인트를 불러옴.
          const response = await axios.get("/api/findidpassword");
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
      //fetchData는 서버로 네트워크 요청을 보내고 응답을 받을 수 있게 하는 메서드이다.
    }, []);
  
//메인 페이지에 들어가면, background image가 그냥 나타나는 것이 아니라 반응형으로 나타나게 하기.
//배경음도 넣으면 좋다.

    return (
        <div className="container">
        <div className="left-section">
          <div className="logo-container"> {/* div로 감싼 다음, 그 안에 img,span을 넣는다.*/ }
          {/* a로 감싼 다음, img를 설정하면 img를 클릭 시 다른 사이트로 이동할 수 있게 해준다.*/ }
          <a href="/main">
          <img className="signuplogo" src="https://aikingsejong.s3.ap-northeast-2.amazonaws.com/aikingsejonglogo.png" alt="로고" />
          </a>
  
          </div>
          
          
          <form>
            <span className="findidpasswordtext">아이디/비밀번호찾기</span>
            <span className="findidpasswordtext1">아이디/비밀번호를 잊어버리셨다면, 이메일/아이디를 입력해서 아이디/비밀번호를 다시 찾으세요.</span>
            <input  className="typeemail" type="text" placeholder="이메일 주소를 입력해주세요" />
            <button  className="findemail" type="submit">이메일 찾기</button>
            <input  className="typeid" type="text" placeholder="아이디를 입력해주세요." />
            <button  className="findidpassword" type="submit">비밀번호 찾기</button>
          <a href="/main" className="gotomain">메인 페이지로 돌아가시려면 여기를 클릭해주세요.</a>
          </form>
        </div>
        <div className="right-section" style={{backgroundImage: `url(${imageurl})`}}></div>
      </div>
    );
  }
  
  export default App;