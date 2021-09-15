import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const About = () => {
  return (
    <>
      <Typography variant={"h3"}>Building an open digital economy</Typography>
      <Typography variant={"body1"} style={{ marginTop: "20px" }}>
        At OpenSea, we're excited about a brand new type of digital good called
        a non-fungible token, or NFT. NFTs have exciting new properties: they’re
        unique, provably scarce, tradeable, and usable across multiple
        applications. Just like physical goods, you can do whatever you want
        with them! You could throw them in the trash, gift them to a friend
        across the world, or go sell them on an open marketplace. But unlike
        physical goods, they're armed with all the programmability of digital
        assets.
      </Typography>
      <Typography variant={"body1"} style={{ marginTop: "20px" }}>
        A core part of our vision is that open protocols like Ethereum and
        interoperable standards like ERC-721 and ERC-1155 will enable vibrant
        new economies. We're building tools that allow consumers to trade their
        assets freely, creators to launch new digital works, and developers to
        build rich, integrated marketplaces for their digital assets.
      </Typography>
      <Typography variant={"body1"} style={{ marginTop: "20px" }}>
        We’re proud to be the first and largest marketplace for NFTs.
      </Typography>
    </>
  );
};

export default withRouter(About);
