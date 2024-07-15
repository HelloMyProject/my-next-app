// src/modules/dashboard/components/DashboardComponent.tsx

import React from 'react';

interface DashboardComponentProps {
  data: string[];
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default DashboardComponent;
