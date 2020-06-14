import * as actionTypes from "../actions/actionTypes";

const initState = {
  listData: null,
  current: null,
  rating: null,
  upload: null,
  update: null,
  deleted: null,
};

export const rootReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.LOAD_LIST_DATA_SUCCESS:
      return {
        ...state,
        listData: action.response,
      };

    case actionTypes.PICK_ITEM_SUCCESS:
      return {
        ...state,
        current: action.response,
      };

    case actionTypes.UPLOAD_ITEM_SUCCESS:
      return {
        ...state,
        upload: action.response,
      };
    case actionTypes.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        update: action.response,
      };
    case actionTypes.UPDATE_RATING_SUCCESS:
      return {
        ...state,
        rating: action.response,
      };
    case actionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        deleted: action.response,
      };

    default:
      return state;
  }
};

export default rootReducer;
