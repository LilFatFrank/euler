import { Switch, Route } from "react-router-dom";
import { About, Home, Assets, Blog, SingleAsset } from "../pages";

const Routes = () => (
  <Switch>
    <Route path={"/"} exact component={Home} />
    <Route path={"/assets"} exact component={Assets} />
    <Route path={"/assets/:address"} exact component={Assets} />
    <Route path={"/assets/:address/:tokenId"} exact component={SingleAsset} />
    <Route path={"/about"} exact component={About} />
    <Route path={"/blog"} exact component={Blog} />
  </Switch>
);

export default Routes;
