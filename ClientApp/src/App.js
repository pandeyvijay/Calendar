import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<div className="main">test App</div>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
