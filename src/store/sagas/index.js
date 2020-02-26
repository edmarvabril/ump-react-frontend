import { fork, all } from 'redux-saga/effects';

import {
  getAllProceduresWatcher,
  addProcedureWatcher,
  editProcedureWatcher,
  deleteProcedureWatcher,
} from './procedure';

import { loginWatcher } from './auth';

import {
  addScheduleWatcher,
  getDeptScheduleWatcher,
  getAllSchedulesWatcher,
} from './schedule';

import {
  getAllDepartmentsWatcher,
  addDepartmentWatcher,
  removeDepartmentWatcher,
  updateDepartmentWatcher,
} from './department';

import { getTimeslotWatcher, updateTimeslotWatcher } from './timeslot';

function* rootSaga() {
  yield all([
    fork(getAllProceduresWatcher),
    fork(addProcedureWatcher),
    fork(editProcedureWatcher),
    fork(deleteProcedureWatcher),
    fork(loginWatcher),
    fork(addScheduleWatcher),
    fork(getAllDepartmentsWatcher),
    fork(addDepartmentWatcher),
    fork(removeDepartmentWatcher),
    fork(updateDepartmentWatcher),
    fork(getDeptScheduleWatcher),
    fork(getAllSchedulesWatcher),
    fork(getTimeslotWatcher),
    fork(updateTimeslotWatcher),
  ]);
}

export default rootSaga;
