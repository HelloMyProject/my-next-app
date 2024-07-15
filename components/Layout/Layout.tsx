// app/layout.tsx

import React from 'react';
import ProviderWrapper from '../ProviderWrapper'; // Adjust the path if necessary

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProviderWrapper>
      <div>
        {/* You can add header, footer, navigation, etc., here */}
        {children}
      </div>
    </ProviderWrapper>
  );
};

export default Layout;
