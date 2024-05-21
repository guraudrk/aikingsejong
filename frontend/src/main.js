import { useEffect, useState } from 'react';
import './css/main.css';


//이미지 url을 이미지 지정해 두어야, s3 기능을 쉽게 사용할 수 있다.
const imageurl = "https://aikingsejong.s3.ap-northeast-2.amazonaws.com/2013100715011489.jpg";


function App() {





  //백엔드에서 가져온 데이터를 저장한다.
  //fetch 요청 시 헤더에 accept:application/json을 명시해서 json형식의 응답을 받도록 할 수 있다.
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch("http://localhost:8080/api/main", {
        headers: {
          Accept: "application/json"
        }
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    //fetch를 사용해서 요청을 보낸다. 간단한 http 요청을 보내고 응답을 처리하는 데 사용할 수 있다.
  
  
//메인 페이지에 들어가면, background image가 그냥 나타나는 것이 아니라 반응형으로 나타나게 하기.
//배경음도 넣으면 좋다.

    return (
      <div>
        {/* 상단 회색 배경 */}
        <div className="top-section">
          {/* 내용 */}
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