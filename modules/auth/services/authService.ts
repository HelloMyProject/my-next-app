export const login = async (email: string, password: string) => {
    // Simulate an API call
    if (email === 'user@example.com' && password === 'password') {
      return { token: 'fake-jwt-token' };
    }
    throw new Error('Invalid credentials');
  };
  