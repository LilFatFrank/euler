import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./wrapper/Wrapper";
import classes from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`${classes.app}`}>
      <Router>
        <Switch>
          <Route path="/" component={Wrapper} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
