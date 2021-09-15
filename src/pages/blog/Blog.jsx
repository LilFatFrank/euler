import { Divider, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classes from "../../styles/app.module.scss";

const Blog = () => {
  return (
    <>
      <div
        className={`${classes.flex} ${classes.flexDirectionColumn} ${classes.flexGap20}`}
      >
        <a
          target="blank"
          href="https://opensea.io/blog/announcements/employee-information-use-at-opensea/"
        >
          <Typography variant={"h4"}>
            Employee information use at OpenSea
          </Typography>
        </a>
        <Divider />
        <a
          target="blank"
          href="https://opensea.io/blog/interviews/rebecca-minkoff-jo-lambert-empowering-women-through-nfts/"
        >
          <Typography variant={"h4"}>
            Rebecca Minkoff &amp; Jo Lambert: empowering women through NFTs
          </Typography>
        </a>
        <Divider />
        <a
          target="blank"
          href="https://opensea.io/blog/announcements/new-features-and-updates-august-21/"
        >
          <Typography variant={"h4"}>
            New features and updates, August 2021
          </Typography>
        </a>
        <Divider />
        <a
          target="blank"
          href="https://opensea.io/blog/spotlight/trending-nfts-steph-curry-creature-world-and-more/"
        >
          <Typography variant={"h4"}>
            Trending NFTs: Steph Curry, Creature World, and more
          </Typography>
        </a>
      </div>
    </>
  );
};

export default withRouter(Blog);
