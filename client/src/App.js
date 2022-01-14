import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./components/pages/About";
import AlertState from "./context/alert/AlertState";
import { Alerts } from "./components/layout/Alerts";
import { AuthState } from "./context/auth/AuthState";
import { ContactState } from "./context/contact/ContactState";
import { Home } from "./components/pages/Home";
import { Login } from "./components/auth/Login";
import { NavBar } from "./components/layout/NavBar";
import { NotFound } from "./components/pages/NotFound";
import { Register } from "./components/auth/Register";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <NavBar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/" component={NotFound} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
