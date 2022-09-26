import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";

function App_fetch() {
  const [con, setCon] = useState();
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then(console.log);
    // fetch("/data.json")
    //   .then((response) => response.json())
    //   .then(console.log);
    setLoding(false);
    fetch(process.env.PUBLIC_URL + "/data.json")
      .then((res) => res.json())
      .then((res) => {
        setCon(res);
        setLoding(true);
      });
  }, []);
  return (
    <div>
      <div>
        {/* {res[0].id} */}
        {/* {console.log(res)} // undefined  */}
        {/* {console.log(con)} */}
        {loding ? (
          <div>
            {con.map((it, idex) => {
              return (
                <div key={it.id}>
                  <Link to={`list/${it.id}`}>
                    {/* <img src={`${process.env.PUBLIC_URL}${it.img}`} alt="" /> */}
                    {it.name}
                  </Link>
                </div>
              );
            })}
            <Routes>
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

export default App_fetch;

/*json 파일의 경우 import 되지않는다
#외부 데이터를 가져오는 법
fetch
aixos
사용해야한다
https://velog.io/@eunbinn/Axios-vs-Fetch
*/
