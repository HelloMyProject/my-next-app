// app/dashboard/page.tsx
"use client"; // If required by your environment

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataRequest } from '../../store/dashboardActions'; // Adjust import path as necessary
import Layout from '../../components/Layout/Layout'; // Adjust import path as necessary

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.dashboard.loading); // Adjust state selector according to your state structure
  const error = useSelector((state: any) => state.dashboard.error);
  const data = useSelector((state: any) => state.dashboard.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
   
    <Layout>
      <h1>Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Layout>
  );
};

export default DashboardPage;
