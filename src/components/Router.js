import React, { useState } from "react";
import {
 HashRouter as Router,
 Route,
 Switch,
 Redirect,
} from "react-router-dom";
import Auth from "../router/Auth";
import Home from "../router/Home";
import EditProfile from "../router/EditProfile";
import Profile from "../router/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
 return (
  <Router>
   {isLoggedIn && <Navigation />}
   <Switch>
    {isLoggedIn ? (
     <>
      <Route exact path="/">
       <Home />
      </Route>
      <Route exact path="/profile">
       <Profile />
      </Route>
      {/* <Redirect from="*" to="/" /> */}
     </>
    ) : (
     <>
      <Route exact path="/">
       <Auth />
      </Route>
      {/* <Redirect from="*" to="/" /> */}
     </>
    )}
   </Switch>
  </Router>
 );
};

export default AppRouter;
