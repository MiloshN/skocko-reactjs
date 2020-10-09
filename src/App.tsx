import React, { useContext } from "react";
import "./style/style.css";
import app from "./constants/firebase";
import { Modal } from "./components/modal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import userContext from "./context/user/userContext";
import "normalize.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="game-wrapper">
      {console.log(userContext)}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
