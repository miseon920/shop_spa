import "./App.css";
import Header from "./pages/Header";
import { company, profile } from "./data/data";

function App() {
  return (
    <div>
      <Header data={company} profile={profile} />
    </div>
  );
}

export default App;
