import { AppBar, Toolbar, InputBase } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useStyles } from "../../../styles/styles";
import classes from "../../../styles/app.module.scss";

const Header = () => {
  const styles = useStyles();

  window.addEventListener("keyup", (e) => {
    if (
      e.key.toLowerCase() === "enter" &&
      document.getElementById("input-contract").value
    ) {
      window.location.href = `/assets/${
        document.getElementById("input-contract").value
      }`;
    }
  });

  return (
    <AppBar position="fixed" className={`${styles.appBar}`}>
      <Toolbar
        className={`${styles.header} ${classes.flex} ${classes.flexJustifyEnd}`}
      >
        <div
          className={`${classes.flex} ${classes.flexAlignCenter} ${classes.flexGap10}`}
        >
          <SearchIcon style={{ fill: "var(--primary)" }} />
          <InputBase
            placeholder="Paste Contract…"
            inputProps={{ "aria-label": "search" }}
            style={{ fontSize: "18px" }}
            id="input-contract"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
