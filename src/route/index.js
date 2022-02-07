import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../midleware/Auth";
import Guest from "../midleware/Guest";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Home from "../views/Home";
// import Main from "../views/Main";
import TentangPage from "../views/TentangPage";
import UpdateProfile from "../views/UpdateProfile";

function index(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/masuk">
          <Guest>
            <Login />
          </Guest>
        </Route>
        <Route path="/daftar">
          <Guest>
            <Register />
          </Guest>
        </Route>
        <Route path="/tentang">
          <Auth>
            <TentangPage />
          </Auth>
        </Route>
        <Route path="/profile">
          <Auth>
            <UpdateProfile />
          </Auth>
        </Route>
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default index;
