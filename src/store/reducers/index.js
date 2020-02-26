import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import procedure from './procedure';
import auth from './auth';
import schedule from './schedule';
import department from './department';
import timeslot from './timeslot';


const procedurePersistConfig = { key: 'procedure', storage };
const authPersistConfig = { key: 'auth', storage };
const schedulePersistConfig = { key: 'schedule', storage };
const departmentPersistConfig = { key: 'department', storage };

const rootReducer = combineReducers({
  procedure: persistReducer(procedurePersistConfig, procedure),
  auth: persistReducer(authPersistConfig, auth),
  schedule: persistReducer(schedulePersistConfig, schedule),
  department: persistReducer(departmentPersistConfig, department),
  timeslot,
});

export default rootReducer;
