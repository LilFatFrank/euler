import { Drawer, Typography, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Sprite } from "../../../components/atoms";
import { useStyles } from "../../../styles/styles";
import classes from "../../../styles/app.module.scss";

const Sidebar = () => {
  const styles = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: styles.background }}
    >
      <div
        className={`${styles.list} ${classes.flex} ${classes.flexAlignEnd} ${classes.flexDirectionColumn} ${classes.flexJustifySpaceBetween}`}
        role="presentation"
      >
        <img src={"assets/images/rainbow-cat.png"} alt="Rainbow Cat Logo" />
        <List>
          {["Home", "Market", "Create", "About", "Blog"].map((menu, index) => (
            <ListItem button key={`${menu} - ${index}`}>
              <Link
                to={`/${menu === "Home" ? "" : menu.toLowerCase()}`}
                className={styles.listItem}
              >
                <Typography variant={"body1"}>{menu}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
        <div
          className={`${styles.drawerSocials} ${classes.flex} ${classes.flexJustifySpaceAround}`}
        >
          {["twitter", "instagram", "telegram", "discord"].map(
            (social, index) => (
              <Sprite
                id={social}
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
                key={`${social} - ${index}`}
              />
            )
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
