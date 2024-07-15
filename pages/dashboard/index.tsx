"use client";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataRequest } from './actions/index';
import Layout from '../../components/Layout/Layout';

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.dashboard.loading);
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
