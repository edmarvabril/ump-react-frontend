import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_DEPARTMENTS_FAILURE,
  GET_DEPARTMENTS_REQUEST,
  GET_DEPARTMENTS_SUCCESS,
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_FAILURE,
  ADD_DEPARTMENT_SUCCESS,
  REMOVE_DEPARTMENT_REQUEST,
  REMOVE_DEPARTMENT_FAILURE,
  REMOVE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
} from '../actions/actionTypes';

import {
  getAllDepartments,
  addDepartment,
  removeDepartment,
  updateDepartment,
} from '../api/department';

/* GET DEPARTMENTS */
function* getAllDepartmentsWorker(action) {
  try {
    const result = yield call(getAllDepartments, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_DEPARTMENTS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_DEPARTMENTS_FAILURE, payload: result });
    }
  } catch (error) {
    yield put({ type: GET_DEPARTMENTS_FAILURE });
  }
}

export function* getAllDepartmentsWatcher() {
  yield takeLatest(GET_DEPARTMENTS_REQUEST, getAllDepartmentsWorker);
}

/* ADD DEPARTMENT */
function* addDepartmentWorker(action) {
  try {
    const result = yield call(addDepartment, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: ADD_DEPARTMENT_SUCCESS, payload: result });
    } else {
      yield put({ type: ADD_DEPARTMENT_FAILURE, payload: result });
    }
  } catch (error) {
    yield put({ type: ADD_DEPARTMENT_FAILURE });
  }
}

export function* addDepartmentWatcher() {
  yield takeLatest(ADD_DEPARTMENT_REQUEST, addDepartmentWorker);
}

/* REMOVE DEPARTMENT */
function* removeDepartmentWorker(action) {
  try {
    const result = yield call(removeDepartment, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: REMOVE_DEPARTMENT_SUCCESS, payload: result });
    } else {
      yield put({ type: REMOVE_DEPARTMENT_FAILURE, payload: result });
    }
  } catch (error) {
    yield put({ type: REMOVE_DEPARTMENT_FAILURE });
  }
}

export function* removeDepartmentWatcher() {
  yield takeLatest(REMOVE_DEPARTMENT_REQUEST, removeDepartmentWorker);
}

/* UPDATE DEPARTMENT */
function* updateDepartmentWorker(action) {
  try {
    const result = yield call(updateDepartment, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_DEPARTMENT_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_DEPARTMENT_FAILURE, payload: result });
    }
  } catch (error) {
    yield put({ type: REMOVE_DEPARTMENT_FAILURE });
  }
}

export function* updateDepartmentWatcher() {
  yield takeLatest(UPDATE_DEPARTMENT_REQUEST, updateDepartmentWorker);
}
