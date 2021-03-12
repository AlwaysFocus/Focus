import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GlobalStyle from "./globalStyles";
import { Nav } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>

      <Nav></Nav>
      <Switch>
        <Route path="/Focus" exact component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
