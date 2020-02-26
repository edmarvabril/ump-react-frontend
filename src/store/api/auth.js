import ajax from './ajax';
import { API } from '../../constants/api';

export const getAllDepartments = data => {
  const url = `${API}/api/department?offset=0&limit=20`;
  return ajax(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  });
};

export const addDepartment = data => {
  const url = `${API}/api/department`;
  return ajax(url, {
    method: 'POST',
    body: JSON.stringify(data.body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  });
};

export const removeDepartment = data => {
  const url = `${API}/api/department/${data.deptId}`;
  return ajax(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  });
};

export const updateDepartment = data => {
  const url = `${API}/api/department/${data.deptId}`;
  return ajax(url, {
    method: 'PUT',
    body: JSON.stringify(data.body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  });
};
