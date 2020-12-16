import React, { Suspense, Spinner } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Register from "./components/Register/Register.jsx";
import ProtectedComponent from "./components/ProtectedComponent/ProtectedComponent";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Spinner />}>
            <LogIn />
          </Suspense>
        </Route>
        <Route exact path="/register" component={Register} />
        <ProtectedComponent>
          <Suspense fallback={<Spinner />}>
            <NavBar />
            <Route exact path="/chat" component={Home} />
          </Suspense>
        </ProtectedComponent>
        <ProtectedComponent>
          <Suspense fallback={<Spinner />}>
            <NavBar />
            <Route exact path="/chat/:id" component={Home} />
          </Suspense>
        </ProtectedComponent>
      </Switch>
    </Router>
  );
}