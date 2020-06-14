import * as actionTypes from "./actionTypes";

export const actions = {
  loadListData: () => ({
    type: actionTypes.LOAD_LIST_DATA,
  }),

  fetchItem: (id) => ({
    type: actionTypes.PICK_ITEM,
    id,
  }),
  create: (inputData) => ({
    type: actionTypes.UPLOAD_ITEM,
    inputData,
  }),
  update: (inputData) => ({
    type: actionTypes.UPDATE_ITEM,
    inputData,
  }),
  postRating: (inputData) => ({
    type: actionTypes.UPDATE_RATING,
    inputData,
  }),
  remove: (id) => ({
    type: actionTypes.DELETE_ITEM,
    id,
  }),
};
