import { fork } from "redux-saga/effects";
import {
  watchLoadListData,
  watchLoadItemData,
  watchUploadNewItem,
  watchUpdateItemContent,
  watchUpdateItemRating,
  watchRemoveItem,
} from "./watchers";

export default function* startForman() {
  yield fork(watchLoadListData);
  yield fork(watchLoadItemData);
  yield fork(watchUploadNewItem);
  yield fork(watchUpdateItemContent);
  yield fork(watchRemoveItem);
  yield fork(watchUpdateItemRating);
}
