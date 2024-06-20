import axios from 'axios';
import { useEffect, useState } from 'react';
import './css/main.css';


//이미지 url을 이미지 지정해 두어야, s3 기능을 쉽게 사용할 수 있다.
const imageurl = "https://aikingsejong.s3.ap-northeast-2.amazonaws.com/2013100715011489.jpg";


function App() {





  //백엔드에서 가져온 데이터를 저장한다.
  //fetch 요청 시 헤더에 accept:application/json을 명시해서 json형식의 응답을 받도록 할 수 있다.
    const [currentUser,setCurrentUser] = useState(null);
        useEffect(() => {
     // Fetch current user session
    axios.get(`http://localhost:8080/api/currentUser`, { withCredentials: true })
    .then(response => {
      console.log("response:",response);
      const data = response.data; // JSON 형식의 데이터로 가정
      console.log("data:",data);
      const userId = data.userId; // 데이터에서 userId 속성 추출
      console.log("userId:",userId);
      setCurrentUser(userId);    })
    .catch(error => {
      console.error("로그인 유저를 불러오는 대에 오류가 생겼습니다.:", error);
      alert("로그인 유저를 불러오는 대에 오류가 생겼습니다.")
    
    });
    }, []);
    useEffect(() => {
      if (currentUser) {
          console.log("로그인을 환영합니다! 로그인된 아이디: ", currentUser);
      } else {
          console.log("로그인 되어 있지 않습니다.");
      }
  }, [currentUser]);// currentUser가 업데이트 될 때마다 실행
    //fetch를 사용해서 요청을 보낸다. 간단한 http 요청을 보내고 응답을 처리하는 데 사용할 수 있다.
  
  

    //로그아웃을 할 때 쓰는 함수.
    const handleLogout = () =>{

      //포른트엔드에서 axios 요청 시 세션 정보를 포함하도록 withCredemtials를 true로 한다.
      axios.post("http://localhost:8080/api/logout", { withCredentials: true })
      .then(()=>{
        setCurrentUser(null); //currentuser를 null로 만든다.

      })
      .catch(error=>{
        console.error("로그아웃 도중에 문제가 발생했습니다.:", error);
        alert("로그아웃 도중에 문제가 발생했습니다.");
      })
    }


//메인 페이지에 들어가면, background image가 그냥 나타나는 것이 아니라 반응형으로 나타나게 하기.
//배경음도 넣으면 좋다.

    return (
      <div>
        {/* 상단 회색 배경 */}
        <div className="top-section">
          {/* 내용 */}
          {
            currentUser && (
              <div>
                <span>환영합니다.{currentUser}님!</span>
                <button onClick={handleLogout}>로그아웃</button>
              </div>
            )
          }
        </div>

         {/* 아래쪽 흰색 배경 */}
         <div className="bottom-section">
          {/* 내용 */}
        </div>

        {/* 배경 이미지 ----aws s3를 이용해서 이미지를 불러모은다.*/}
        <div className="background-image" style={{backgroundImage: `url(${imageurl})`}}>        {/* 이미지 위의 텍스트 및 버튼 */}
        <div className="text-container">
          <h1>AI 세종대왕에 오신 것을 환영합니다!</h1>
          <p>AI 세종대왕은 세종대왕님과 대화할 수 있는 서비스입니다.</p>
          <p>세종대왕님에 대한 많은 정보를 얻어가세요!</p>
          <button onClick={() => { /* 버튼 클릭 시 동작할 내용 */ }}>Click Me</button>
          
        </div>
      </div>


      </div>
    );
  }
  
  export default App;