import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Register from "./components/Register/Register.jsx";
import ProtectedComponent from "./components/ProtectedComponent/ProtectedComponent";

const App = () => (
  <Suspense fallback="Cargando para comenzar El Cotorreo... ">
    <Router>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/register" component={Register} />
      <Switch>
        <ProtectedComponent>
          <NavBar />
          <Route exact path="/chat" component={Home} />
        </ProtectedComponent>
        <ProtectedComponent>
          <NavBar />
          <Route exact path="/chat/:id" component={Home} />
        </ProtectedComponent>
      </Switch>
    </Router>
  </Suspense>
);

export default App;