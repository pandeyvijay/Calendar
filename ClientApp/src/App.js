import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import CalendarGrid from "./components/content/Content";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<CalendarGrid />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
