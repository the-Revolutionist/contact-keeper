import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./components/pages/About";
import { ContactState } from "./context/contact/ContactState";
import { Home } from "./components/pages/Home";
import { NavBar } from "./components/layout/NavBar";
import { NotFound } from "./components/pages/NotFound";

const App = () => {
  return (
    <ContactState>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ContactState>
  );
};

export default App;
