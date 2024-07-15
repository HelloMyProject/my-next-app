// pages/dashboard/saga/index.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../actions/index';

// Define types for the API response
interface ApiResponse {
  data: any; // Adjust according to your actual response
}

// Function to fetch the local JSON file
const fetchLocalJson = async (): Promise<ApiResponse> => {
  const response = await axios.get('/mockData.json');
  return response.data;
};

// Define the generator function's return type
function* fetchDataSaga(): Generator<any, void, ApiResponse> {
  try {
    const response: ApiResponse = yield call(fetchLocalJson);
    yield put(fetchDataSuccess(response.data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* dashboardSaga() {
  yield takeEvery(fetchDataRequest.type, fetchDataSaga);
}
