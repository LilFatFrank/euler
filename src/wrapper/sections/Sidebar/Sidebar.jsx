import { Drawer, Typography, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Sprite } from "../../../components/atoms";
import { useStyles } from "../../../styles/styles";
import classes from "../../../styles/app.module.scss";
import { SIDEBAR_URLS, SOCIAL_LINKS } from "../../../utils/constants";

const Sidebar = () => {
  const styles = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={styles.drawer}
      classes={{ paper: styles.background }}
    >
      <div
        className={`${styles.list} ${classes.flex} ${classes.flexAlignEnd} ${classes.flexDirectionColumn} ${classes.flexJustifySpaceBetween}`}
        role="presentation"
      >
        <img src={"assets/images/rainbow-cat.png"} alt="Rainbow Cat Logo" />
        <List>
          {SIDEBAR_URLS.map((menu, index) => (
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
          {SOCIAL_LINKS.map((social, index) => (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              key={`${social} - ${index}`}
            >
              <Sprite id={social.label} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
