import { DRAWER_WIDTH } from "../utils/constants";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  list: {
    width: `${DRAWER_WIDTH}px`,
    height: "100%",
  },
  background: {
    borderRight: "none",
    padding: "0px 0px 30px",
  },
  appBar: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    background: "transparent",
    color: "#000",
    boxShadow: "none",
  },
  listItem: {
    width: "100%",
    textDecoration: "none",
  },
  header: {
    padding: "60px 40px",
  },
  drawerSocials: {
    width: "100%",
  },
});
