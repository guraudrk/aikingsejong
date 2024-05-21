/*게시글 페이지*/

import axios from "axios";
import { useEffect, useState } from 'react';
import './css/bulletinboard.css';


function App(){

    //백엔드에서 가져온 데이터를 저장한다.
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
            //백엔드의 api/main(메인페이지) 엔드포인트를 불러옴.
          const response = await axios.get("/api/bulletinboard");
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
        
        </div>
    );


    

}




export default App;