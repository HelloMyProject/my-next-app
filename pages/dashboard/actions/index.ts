import { createAction } from '@reduxjs/toolkit';

export const fetchDataRequest = createAction('dashboard/fetchDataRequest');
export const fetchDataSuccess = createAction<any>('dashboard/fetchDataSuccess');
export const fetchDataFailure = createAction<string>('dashboard/fetchDataFailure');
