import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  UPDATE_PROFILE,
  GET_PROFILE,
  FETCH_ERROR,
  UPDATE_ERROR,
  ON_PROCESS
} from './types';

export const getUserProfile = id => async dispatch => {
  dispatch({ type: ON_PROCESS });

  return await firebase
    .database()
    .ref(`/users/${id}/profile`)
    .once('value', data => {
      if (data.exists()) {
        console.log(data);
        dispatch({ type: GET_PROFILE, payload: data });
      }
      dispatch({ type: FETCH_ERROR, err: 'Profile not found' });
    });
};

export const updateProfile = ({ userId, value }) => async dispatch => {
  dispatch({ type: ON_PROCESS });

  await firebase
    .database()
    .ref(`/users/${userId}`)
    .set({
      name: value.name
    });

  return await firebase
    .database()
    .ref(`/users/${userId}/profile`)
    .set(
      {
        name: value.name,
        phone: value.phone && value.phone,
        address: value.address && value.address,
        city: value.city && value.city,
        lng: value.lng && value.lng,
        lat: value.lat && value.lat,
        hobby: value.hobby && value.hobby
      },
      err => {
        if (err) {
          console.log(err);
          dispatch({ type: UPDATE_ERROR, err });
        }
        dispatch({ type: UPDATE_PROFILE });
        Actions.viewprofile({ type: 'reset', userId });
      }
    );
};
