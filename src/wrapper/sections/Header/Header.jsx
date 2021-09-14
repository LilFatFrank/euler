import { AppBar, Toolbar, InputBase, Button } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useStyles } from "../../../styles/styles";
import classes from "../../../styles/app.module.scss";

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="fixed" className={`${styles.appBar}`}>
      <Toolbar
        className={`${styles.header} ${classes.flex} ${classes.flexJustifySpaceBetween}`}
      >
        <div
          className={`${classes.flex} ${classes.flexAlignCenter} ${classes.flexGap10}`}
        >
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            style={{ fontSize: "18px" }}
          />
        </div>
        <Button>Connect</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
