import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  loadListData,
  loadItemData,
  updateItemRating,
  uploadNewItem,
  updateItemContent,
  removeItem,
} from "./mainSaga";

export function* watchLoadListData() {
  yield takeLatest(actionTypes.LOAD_LIST_DATA, loadListData);
}

export function* watchLoadItemData() {
  yield takeLatest(actionTypes.PICK_ITEM, loadItemData);
}

export function* watchUploadNewItem() {
  yield takeLatest(actionTypes.UPLOAD_ITEM, uploadNewItem);
}
export function* watchUpdateItemContent() {
  yield takeLatest(actionTypes.UPDATE_ITEM, updateItemContent);
}
export function* watchUpdateItemRating() {
  yield takeLatest(actionTypes.UPDATE_RATING, updateItemRating);
}
export function* watchRemoveItem() {
  yield takeLatest(actionTypes.DELETE_ITEM, removeItem);
}
