import { put, call } from "redux-saga/effects";
import {
  getAllItems,
  getItem,
  updateRating,
  createItem,
  updateItem,
  deleteItem,
} from "../../services/sagaService";

import * as actionTypes from "../actions/actionTypes";

export function* loadListData() {
  try {
    const response = yield call(getAllItems);
    yield put({ type: actionTypes.LOAD_LIST_DATA_SUCCESS, response });
  } catch (error) {
    yield put({ type: actionTypes.LOAD_LIST_DATA_ERROR, error });
  }
}

export function* loadItemData(payload) {
  try {
    const response = yield call(getItem, payload);
    yield put({ type: actionTypes.PICK_ITEM_SUCCESS, response });
  } catch (error) {
    yield put({ type: actionTypes.PICK_ITEM_ERROR, error });
  }
}

export function* uploadNewItem(payload) {
  try {
    const response = yield call(createItem, payload);
    yield put({ type: actionTypes.UPLOAD_ITEM_SUCCESS, response });
  } catch (error) {
    yield put({ type: actionTypes.UPLOAD_ITEM_ERROR, error });
  }
}

export function* updateItemContent(payload) {
  try {
    const response = yield call(updateItem, payload);
    yield put({ type: actionTypes.UPDATE_ITEM_SUCCESS, response });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_ITEM_ERROR, error });
  }
}

export function* updateItemRating(payload) {
  try {
    const response = yield call(updateRating, payload);
    yield put({ type: actionTypes.UPDATE_RATING_SUCCESS, response });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_RATING_ERROR, error });
  }
}

export function* removeItem(payload) {
  try {
    const response = yield call(deleteItem, payload);
    yield put({ type: actionTypes.DELETE_ITEM_SUCCESS, response });
  } catch (error) {
    yield put({ type: actionTypes.DELETE_ITEM_ERROR, error });
  }
}
