import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./wrapper/Wrapper";
import classes from "./styles/app.module.scss";
import { CssBaseline, ThemeProvider, Typography } from "@material-ui/core";
import { theme } from "./styles/styles";
import { isMobile } from "react-device-detect";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isMobile ? (
        <div
          className={`${classes.flex} ${classes.flexJustifyCenter} ${classes.flexAlignCenter} ${classes.flexGap20} ${classes.flexDirectionColumn}`}
          style={{ height: "100vh", width: "100vw", padding: "20px" }}
        >
          <img
            src={`assets/images/rainbow-cat.png`}
            alt={"Rainbow Cat"}
            width={120}
          />
          <Typography variant={"h5"}>
            Please use Desktop/Laptop to view the app 🖥️💻
          </Typography>
        </div>
      ) : (
        <div className={`${classes.app}`}>
          <Router>
            <Switch>
              <Route path="/" component={Wrapper} />
            </Switch>
          </Router>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
