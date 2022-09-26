import "./App.css";
import Header from "./pages/Header";
import { company, profile, content } from "./data/data";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";

function App2() {
  return (
    <div>
      <Header data={company} profile={profile} />
      {/* {console.log(content)} */}
      {content.map((it, idx) => (
        <div key={it.id}>
          <Link to={`/list/${it.id}`}>{it.id}</Link>
        </div>
      ))}
      {/* <Detail /> */}
      <Routes>
        <Route path="/list/:num" element={<Detail list={content} />}></Route>
        {/*
          Link에서 it.id로 넘긴값을 route에 num에 담아 넘겨줌
        */}
      </Routes>
    </div>
  );
}

export default App2;

//deploy 한 파일을 다른곳에서 받을때는 npm install을 해야함
