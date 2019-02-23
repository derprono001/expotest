import { ON_HOME, ON_MAP, ON_CONNECTION, ON_NOTIFICATION, ON_MENU } from '../actions/types';

const INITIAL_STATE = {
  isOnHome: false,
  isOnMap: false,
  isOnConnection: false,
  isOnNotification: false,
  isOnMenu: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_MAP:
      return {
        ...state,
        isOnMap: true
      };

    case ON_CONNECTION:
      return {
        INITIAL_STATE,
        isOnConnection: true
      };

    case ON_NOTIFICATION:
      return {
        INITIAL_STATE,
        isOnNotification: true
      };

    case ON_MENU:
      return {
        INITIAL_STATE,
        isOnMenu: true
      };

    case ON_HOME:
    default:
      return {
        INITIAL_STATE,
        isOnHome: true
      };
  }
};
