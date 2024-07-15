import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../actions/index';

interface DashboardState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataSuccess, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataFailure, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
