import {
  GET_ASSETS,
  GET_SINGLE_ASSET,
  REQUEST_ASSET,
  REQUEST_SINGLE_ASSET,
} from "./AppActionTypes";

const initialState = {
  loadingAsset: false,
  assets: [],
  loadingSingleAsset: false,
  singleAsset: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ASSET:
      return {
        ...state,
        loadingAsset: true,
        assets: [],
      };
    case GET_ASSETS: {
      return {
        ...state,
        loadingAsset: false,
        assets: action.payload,
      };
    }
    case REQUEST_SINGLE_ASSET: {
      return {
        ...state,
        loadingSingleAsset: true,
        singleAsset: {},
      };
    }
    case GET_SINGLE_ASSET: {
      return {
        ...state,
        loadingSingleAsset: false,
        singleAsset: action.payload,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
