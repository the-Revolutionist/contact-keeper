import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./components/pages/About";
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
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route path="/" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
