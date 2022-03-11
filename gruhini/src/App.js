import React, { useEffect, useState } from "react";
import "./style/App.css";
import GetStarted from "./GetStarted";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Empower from "./Empower";
import { Authentication } from "./data/auth";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Loader from "./components/Loader";
import PostJob from "./PostJob";
import FindJob from "./FindJob";
import SellProduct from "./SellProduct";
import BuyProduct from "./BuyProduct";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Authentication
          child={
            <Router>
              <Routes>
                <Route exact path={"/"} element={<GetStarted />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
                <Route
                  path={"/empower"}
                  element={<PrivateRoute child={<Empower />}> </PrivateRoute>}
                />
                <Route
                  path={"/findJob"}
                  element={<PrivateRoute child={<FindJob />}> </PrivateRoute>}
                />
                <Route
                  path={"/postJob"}
                  element={<PrivateRoute child={<PostJob />}> </PrivateRoute>}
                />
                <Route
                  path={"/sellProduct"}
                  element={
                    <PrivateRoute child={<SellProduct />}> </PrivateRoute>
                  }
                />
                <Route
                  path={"/buyProduct"}
                  element={
                    <PrivateRoute child={<BuyProduct />}> </PrivateRoute>
                  }
                />
                <Route path={"/forgotpassword"} element={<ForgotPassword />} />
              </Routes>
            </Router>
          }
        />
      )}
    </div>
  );
}

export default App;
