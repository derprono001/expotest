import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  BUDDY_UPDATE,
  BUDDY_CREATE,
  BUDDIES_FETCH_SUCCESS,
  BUDDIES_SAVE_SUCCESS
} from './types';

export const buddyUpdate = ({ prop, value }) => ({
    type: BUDDY_UPDATE,
    payload: { prop, value }
  });

export const buddyCreate = ({ item, phone, platform }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/buddies`)
      .push({ item, phone, platform })
      .then(() => {
        dispatch({ type: BUDDY_CREATE });
        Actions.buddyList({ type: 'reset' });
      });
  };
};

export const buddiesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/buddies`)
      .on('value', snapshot => {
        dispatch({ type: BUDDIES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const buddySave = ({ item, phone, platform, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/buddies/${uid}`)
      .set({ item, phone, platform })
      .then(() => {
        dispatch({ type: BUDDIES_SAVE_SUCCESS });
        Actions.buddyList({ type: 'reset' });
      });
  };
};

export const buddyDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/buddies/${uid}`)
      .remove()
      .then(() => {
        Actions.buddyList({ type: 'reset' });
      });
  };
};
