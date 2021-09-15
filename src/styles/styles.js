import { DRAWER_WIDTH } from "../utils/constants";
import { makeStyles, createTheme } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  appBar: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    background: "#fff !important",
    boxShadow: "none !important",
  },
  list: {
    width: `${DRAWER_WIDTH}px`,
    height: "100%",
  },
  drawer: {
    width: `${DRAWER_WIDTH}px`,
    flexShrink: 0,
  },
  background: {
    borderRight: "none !important",
    padding: "0px 0px 30px",
    width: `${DRAWER_WIDTH}px`,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    overflowY: "auto",
  },
  listItem: {
    width: "100%",
    textDecoration: "none",
  },
  drawerSocials: {
    width: "100%",
  },
}));

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
    },
  },
});
