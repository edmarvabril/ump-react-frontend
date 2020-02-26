import {
  ADD_DEPARTMENT_REQUEST,
  GET_DEPARTMENTS_REQUEST,
  REMOVE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_REQUEST,
} from './actionTypes';

export const addDepartment = data => {
  return {
    type: ADD_DEPARTMENT_REQUEST,
    data,
  };
};

export const getAllDepartments = data => {
  return {
    type: GET_DEPARTMENTS_REQUEST,
    data,
  };
};

export const removeDepartment = data => {
  return {
    type: REMOVE_DEPARTMENT_REQUEST,
    data,
  };
};

export const updateDepartment = data => {
  return {
    type: UPDATE_DEPARTMENT_REQUEST,
    data,
  };
};
