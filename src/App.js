import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";


import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
