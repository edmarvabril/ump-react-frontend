import { get } from 'lodash';

import {
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_REQUEST,
  GET_DEPARTMENTS_FAILURE,
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_FAILURE,
  ADD_DEPARTMENT_SUCCESS,
  REMOVE_DEPARTMENT_FAILURE,
  REMOVE_DEPARTMENT_REQUEST,
  REMOVE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  hasError: false,
  payload: null,
  departments: [],
  requesting: false,
  requestSuccessful: false,
};

const department = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case GET_DEPARTMENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: action.payload,
      };
    case GET_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        departments: get(action, 'payload.data', []),
      };

    case REMOVE_DEPARTMENT_REQUEST:
    case ADD_DEPARTMENT_REQUEST:
    case UPDATE_DEPARTMENT_REQUEST:
      return {
        ...state,
        requesting: true,
        requestSuccessful: false,
        hasError: false,
      };

    case REMOVE_DEPARTMENT_FAILURE:
    case ADD_DEPARTMENT_FAILURE:
    case UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        requesting: false,
        requestSuccessful: false,
        hasError: true,
        payload: action.payload,
      };

    case REMOVE_DEPARTMENT_SUCCESS:
    case ADD_DEPARTMENT_SUCCESS:
    case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        requesting: false,
        requestSuccessful: true,
        hasError: false,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default department;
