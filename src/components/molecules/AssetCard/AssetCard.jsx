import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import localClasses from "./AssetCard.module.scss";

const AssetCard = ({
  assetTitle,
  assetDescription,
  assetThumbnail,
  assetContract,
  assetTokenId,
  ...props
}) => {
  return (
    <Card className={`${localClasses.card}`}>
      <div className={`${localClasses.padded}`}>
        <Link to={`/assets/${assetContract}/${assetTokenId}`}>
          <CardMedia
            className={`${localClasses.media}`}
            image={
              assetThumbnail || "assets/images/placeholder-asset-image.png"
            }
            title="asset Image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
            >
              {assetTitle || "Test Name"}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              component="p"
              className={`${localClasses.description}`}
            >
              {assetDescription ||
                "This is a test description in case there is no description for the asset returned from the api"}
            </Typography>
          </CardContent>
        </Link>
      </div>
    </Card>
  );
};

export default AssetCard;
