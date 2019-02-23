import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PLACE_UPDATE,
  PLACE_CREATE,
  PLACES_FETCH_SUCCESS,
  PLACES_SAVE_SUCCESS
} from './types';

export const placeUpdate = ({ prop, value }) => ({
  type: PLACE_UPDATE,
  payload: { prop, value }
});

export const placeCreate = ({ item, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/places`)
      .push({ item, phone, shift })
      .then(() => {
        dispatch({ type: PLACE_CREATE });
        Actions.placeList({ type: 'reset' });
      });
  };
};

export const placesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/places`)
      .on('value', snapshot => {
        dispatch({ type: PLACES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const placeSave = ({ item, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/places/${uid}`)
      .set({ item, phone, shift })
      .then(() => {
        dispatch({ type: PLACES_SAVE_SUCCESS });
        Actions.placeList({ type: 'reset' });
      });
  };
};

export const placeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/places/${uid}`)
      .remove()
      .then(() => {
        Actions.placeList({ type: 'reset' });
      });
  };
};
