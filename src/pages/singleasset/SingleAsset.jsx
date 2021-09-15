import { Avatar, Button, Divider, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { ErrorMessage, Loader, Sprite } from "../../components/atoms";
import { fetchSingleAssetCall } from "../../redux/app/AppActions";
import classes from "../../styles/app.module.scss";

const SingleAsset = (props) => {
  const dispatch = useDispatch();
  const { loadingSingleAsset, singleAsset } = useSelector(
    (state) => state.AppReducer
  );

  useEffect(() => {
    dispatch(
      fetchSingleAssetCall(
        props.match.params.address,
        props.match.params.tokenId
      )
    );
  }, []);

  return loadingSingleAsset ? (
    <Loader />
  ) : !singleAsset.error ? (
    <>
      <div
        style={{ margin: "0px 0px 20px" }}
        className={`${classes.flex} ${classes.flexJustifySpaceBetween}`}
      >
        <Typography variant="h3">{singleAsset.name}</Typography>
        <Link to={`/assets/${singleAsset.asset_contract?.address}`}>
          <Button variant="contained" color="primary">
            Other Similar Assets
          </Button>
        </Link>
      </div>
      <div
        className={`${classes.flex} ${classes.flexJustifySpaceBetween} ${classes.flexGap20}`}
        style={{ marginTop: "30px" }}
      >
        <img
          src={singleAsset.image_url}
          style={{ maxWidth: "520px", maxHeight: "520px" }}
        />
        <div
          className={`${classes.flex} ${classes.flexDirectionColumn} ${classes.flexGap10}`}
        >
          <div className={`${classes.padding10}`}>
            <Typography variant="body1">
              {singleAsset.description ||
                "This is a test description in case there is no description for the asset returned from the api"}
            </Typography>
          </div>
          <Divider />
          <div className={`${classes.padding10}`}>
            <Typography variant="body1">Owner Details:</Typography>
            <div
              className={`${classes.flex} ${classes.flexAlignCenter} ${classes.flexGap10}`}
            >
              <Avatar
                alt={singleAsset.owner?.user?.userName}
                src={singleAsset.owner?.profile_img_url}
              />
              <div className={`${classes.flex} ${classes.flexDirectionColumn}`}>
                <Typography variant="body2">
                  Address - {singleAsset.owner?.address}
                </Typography>
                <Typography variant="body2">
                  Name - {singleAsset.owner?.user?.userName}
                </Typography>
              </div>
            </div>
          </div>
          <Divider />
          <div className={`${classes.padding10}`}>
            <Typography variant="body1">Creator Details:</Typography>
            <div
              className={`${classes.flex} ${classes.flexAlignCenter} ${classes.flexGap10}`}
            >
              <Avatar
                alt={singleAsset.creator?.user?.userName}
                src={singleAsset.creator?.profile_img_url}
              />
              <div className={`${classes.flex} ${classes.flexDirectionColumn}`}>
                <Typography variant="body2">
                  Address - {singleAsset.creator?.address}
                </Typography>
                <Typography variant="body2">
                  Name - {singleAsset.creator?.user?.userName}
                </Typography>
              </div>
            </div>
          </div>
          <Divider />
          <a
            href={singleAsset.permalink}
            target="blank"
            style={{ fontSize: "14px" }}
          >
            View on Opensea&nbsp;
            <Sprite id="new-tab" width={16} height={16} />
          </a>
        </div>
      </div>
    </>
  ) : (
    <ErrorMessage />
  );
};

export default withRouter(SingleAsset);
