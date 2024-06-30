const API_URL = 'http://localhost:3000/auth/';

class AuthService {
  async login(user) {
    try {
      const response = await fetch(API_URL + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  async register(user) {
    try {
      const response = await fetch(API_URL + 'signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
