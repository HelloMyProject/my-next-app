// src/modules/dashboard/services/dashboardservice.ts

// Simulated API call to fetch dashboard data
export const fetchDashboardData = async (): Promise<string[]> => {
    // Simulate fetching data from an API
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        // Simulated data
        const data = ['Item 1', 'Item 2', 'Item 3'];
        resolve(data);
      }, 1000); // Simulate delay
    });
  };
  