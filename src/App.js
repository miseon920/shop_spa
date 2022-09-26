import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [con, setCon] = useState();
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(false);
    const url = "https://desipossa.github.io/shop_cra/assets/data.json";
    const getData = async () => {
      //비동기,promise을 생성함
      const res = await axios.get(url);
      //axios 가 url을 가져오는것을 기다림
      const newdata = res.data.slice(0, 50).map((con) => {
        return {
          id: con.id,
          name: con.name,
          des: con.description,
          img: con.image_link,
          won: con.price,
          color: con.product_colors,
        };
      });
      setCon(newdata);
      //setCon(res.data);
      setLoding(true);
      console.log(res.data);
    };
    getData(); //실행
    // axios(url).then((res) => {
    //   setCon(res.data); //axios는 자동으로 변환하므로 json을 안쓰고 .data를 쓴다
    //   setLoding(true);
    //   //console.log(res);
    // });
  }, []);
  return (
    <div>
      <div>
        {/* {res[0].id} */}
        {/* {console.log(res)} // undefined  */}
        {/* {console.log(con)} */}
        {loding ? (
          <div>
            <Routes>
              <Route
                path="/"
                element={con.map((it, idex) => {
                  return (
                    <div key={it.id}>
                      <Link to={`list/${it.id}`}>
                        {/* <img src={`${process.env.PUBLIC_URL}${it.img}`} alt="" /> */}
                        {it.name}
                      </Link>
                    </div>
                  );
                })}
              ></Route>
              <Route path="/list/:num" element={<Detail list={con} />}></Route>
            </Routes>
          </div>
        ) : (
          <div>없음</div>
        )}
      </div>
    </div>
  );
}

export default App;

/*json 파일의 경우 import 되지않는다
#외부 데이터를 가져오는 법
fetch
aixos
사용해야한다
https://velog.io/@eunbinn/Axios-vs-Fetch

https://axios-http.com/kr/docs/api_intro
*/
