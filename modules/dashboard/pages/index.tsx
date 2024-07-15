// // src/modules/dashboard/pages/index.tsx

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../store/store';
// import Layout from '../../../components/Layout/Layout';
// import DashboardComponent from '../components/DashboardComponent';

// const DashboardPage: React.FC = () => {
//   const data = useSelector((state: RootState) => state.dashboard.data);

//   return (
//     <Layout>
//       <h1>Dashboard</h1>
//       <DashboardComponent data={data} />
//     </Layout>
//   );
// };

// export default DashboardPage;


// modules/dashboard/pages/index.tsx
"use client";

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
        </div>
    );
};

export default Dashboard;
