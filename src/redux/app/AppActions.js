import axios from "axios";
import {
  GET_ASSETS,
  GET_SINGLE_ASSET,
  REQUEST_ASSET,
  REQUEST_SINGLE_ASSET,
} from "./AppActionTypes";

const requestAsset = () => {
  return {
    type: REQUEST_ASSET,
  };
};

const fetchAssets = (data) => {
  return {
    type: GET_ASSETS,
    payload: data,
  };
};

const requestSingleAsset = () => {
  return {
    type: REQUEST_SINGLE_ASSET,
  };
};

const fetchSingleAsset = (data) => {
  return {
    type: GET_SINGLE_ASSET,
    payload: data,
  };
};

export const fetchAssetsCall =
  (order = "desc", offset, limit, address = "") =>
  (dispatch, getState) => {
    dispatch(requestAsset());
    const url = `https://api.opensea.io/api/v1/assets?order_direction=${order}${
      offset || offset === 0 ? `&offset=${offset}` : ""
    }${limit ? `&limit=${limit}` : ""}${
      address ? `&asset_contract_addresses=${address}` : ""
    }`;
    console.log(url);
    axios
      .get(url)
      .then(({ data }) => {
        if (data && data.assets && data.assets.length) {
          dispatch(fetchAssets(data.assets));
        } else if (data.assets.length === 0) {
          dispatch(fetchAssets(data.assets));
        }
      })
      .catch((error) => {
        dispatch(fetchAssets({ error: true, errorObject: error }));
      });
  };

export const fetchSingleAssetCall =
  (address, token) => (dispatch, getState) => {
    dispatch(requestSingleAsset());
    axios
      .get(`https://api.opensea.io/api/v1/asset/${address}/${token}`)
      .then(({ data }) => {
        if (data && data.id) {
          dispatch(fetchSingleAsset(data));
        }
      })
      .catch((error) => {
        dispatch(fetchSingleAsset({ error: true, errorObject: error }));
      });
  };
