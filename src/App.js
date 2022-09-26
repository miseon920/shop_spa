import "./App.css";
import Header from "./pages/Header";
import { company, profile, content } from "./data/data";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header data={company} profile={profile} />
      {/* {console.log(content)} */}
      {content.map((it, idx) => (
        <div key={it.id}>{it.id}</div>
      ))}
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
