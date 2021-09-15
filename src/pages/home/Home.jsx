import { Link, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import classes from "../../styles/app.module.scss";
import { AssetCard } from "../../components/molecules";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssetsCall } from "../../redux/app/AppActions";
import { ErrorMessage, Loader } from "../../components/atoms";

const Home = () => {
  const dispatch = useDispatch();
  const { loadingAssets, assets } = useSelector(
    (state) => state.AppReducer
  );

  useEffect(() => {
    dispatch(fetchAssetsCall(undefined, 0, 4));
  }, []);

  return (
    <div
      className={`${classes.flex} ${classes.flexDirectionColumn} ${classes.flexGap30}`}
    >
      <div>
        <Typography variant={"h2"}>Cluster</Typography>
        <Typography variant={"body1"}>
          This is an app created to view NFT assets using the&nbsp;
          <a href="https://opensea.io" target="blank">
            Opensea
          </a>
          &nbsp;api. Read more on the api&nbsp;
          <a href="https://docs.opensea.io" target="blank">
            here
          </a>
          .
        </Typography>
      </div>
      <div
        className={`${classes.flex} ${classes.flexDirectionColumn} ${classes.flexGap10}`}
      >
        <Typography variant={"h5"}>Top assets:</Typography>
        <div
          className={`${classes.flex} ${classes.flexGap20} ${classes.flexWrap}`}
        >
          {loadingAssets ? (
            <Loader />
          ) : (
            <>
              {assets.length ? (
                assets.map((a) => (
                  <AssetCard
                    assetDescription={a.description}
                    assetTitle={a.name}
                    assetThumbnail={a.image_thumbnail_url}
                    assetContract={a.asset_contract.address}
                    assetTokenId={a.token_id}
                    key={a.id}
                  />
                ))
              ) : (
                <ErrorMessage />
              )}
            </>
          )}
        </div>
      </div>
      <Link to="/assets" style={{ width: "fit-content" }}>
        <Button variant={"contained"} color={"primary"}>
          Explore More
        </Button>
      </Link>
    </div>
  );
};

export default withRouter(Home);
