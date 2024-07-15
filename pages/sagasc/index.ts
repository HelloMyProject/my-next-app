
// sagas/index.ts
import { all } from 'redux-saga/effects';
import dashboardSaga from '../dashboard/saga/index'; // Adjust the path as needed

export default function* rootSaga() {
  yield all([
    dashboardSaga(),
    // Add other sagas here if needed
  ]);
}
