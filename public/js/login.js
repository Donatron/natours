import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/users/login',
      data: { email, password }
    });

    if (response.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(location.assign('/'), 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(
      'http://localhost:8000/api/v1/users/logout'
    );

    if (response.data.status === 'success') {
      // true set reload to server and not from client cache
      location.reload(true);
    }
  } catch (error) {
    showAlert('error', 'Error logging out. Try again');
  }
};
