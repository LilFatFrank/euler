import { Typography, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssetsCall } from "../../redux/app/AppActions";
import classes from "../../styles/app.module.scss";
import { AssetCard } from "../../components/molecules";
import { ErrorMessage, Loader } from "../../components/atoms";

const Assets = (props) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);
  const { loadingAsset, assets } = useSelector((state) => state.AppReducer);

  useEffect(() => {
    loadMore(offset, limit);
  }, []);

  const loadMore = (start, end) => {
    dispatch(
      fetchAssetsCall(undefined, start, end, props.match.params.address || "")
    );
    setOffset(start);
    setLimit(end);
  };

  return (
    <div
      className={`${classes.flex} ${classes.flexGap20} ${classes.flexDirectionColumn}`}
    >
      <div className={`${classes.flex} ${classes.flexJustifySpaceBetween}`}>
        <Typography variant="h4">NFT asset</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "fit-content" }}
          onClick={() => loadMore(limit + 1, limit + 8)}
        >
          Load More
        </Button>
      </div>
      <div
        className={`${classes.flex} ${classes.flexGap20} ${classes.flexWrap}`}
      >
        {loadingAsset ? (
          <Loader />
        ) : (
          <>
            {assets.length ? (
              assets.map((asset) => (
                <AssetCard
                  assetDescription={asset.description}
                  assetTitle={asset.name}
                  assetThumbnail={asset.image_thumbnail_url}
                  assetContract={asset.asset_contract.address}
                  assetTokenId={asset.token_id}
                  key={asset.id}
                />
              ))
            ) : (
              <ErrorMessage />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(Assets);
