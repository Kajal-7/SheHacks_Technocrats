import React from "react";
import "./style/App.css";
import Empower from "./Empower";
import GetStarted from "./GetStarted";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import ForgotPass from "./components/Authentication/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/empower" element={<Empower />} />
          <Route path={"/forgotpassword"} element={<ForgotPass/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
