import { combineReducers } from '@reduxjs/toolkit';
import dashboardReducer from '../pages/dashboard/reducer/index';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  // Add more reducers here as needed
});

export default rootReducer;
