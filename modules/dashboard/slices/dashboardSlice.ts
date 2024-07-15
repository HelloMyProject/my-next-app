import { createSlice } from '@reduxjs/toolkit';

interface DashboardState {
  data: string[];
}

const initialState: DashboardState = {
  data: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
