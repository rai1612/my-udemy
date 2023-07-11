import { server } from '../store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    // console.log(`${server}/login`);
    dispatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'content-type': 'application/json',
        },
        withCredentials: true, // wherever cookies are used, it it mandatory
      }
    );
    // console.log(data);
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};
export const loadUser = () => async dispatch => {
  try {
    // console.log(`${server}/login`);
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true, // wherever cookies are used, it it mandatory
    });
    // console.log(data);
    dispatch({ type: 'loadUserSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    // console.log(`${server}/login`);
    dispatch({ type: 'logoutRequest' });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true, // wherever cookies are used, it it mandatory
    });
    // console.log(data);
    dispatch({ type: 'logoutSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

export const register = formdata => async dispatch => {
  try {
    // console.log(`${server}/login`);
    dispatch({ type: 'registerRequest' });
    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        'content-type': 'multipart/form-data',
      },
      withCredentials: true, // wherever cookies are used, it it mandatory
    });
    // console.log(data);
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};

export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFail',
      payload: error.response.data.message,
    });
  }
};
export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });

    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });

    dispatch({
      type: 'cancelSubscriptionSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: error.response.data.message,
    });
  }
};
