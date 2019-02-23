import { ON_HOME, ON_MAP, ON_CONNECTION, ON_NOTIFICATION, ON_MENU } from './types';

export const navigateToHome = () => (dispatch) => (
  dispatch({ type: ON_HOME })
);

export const navigateToMap = () => (dispatch) => (
  dispatch({ type: ON_MAP })
);

export const navigateToConnections = () => (dispatch) => (
  dispatch({ type: ON_CONNECTION })
);

export const navigateToNotifications = () => (dispatch) => (
  dispatch({ type: ON_NOTIFICATION })
);

export const navigateToMenu = () => (dispatch) => (
  dispatch({ type: ON_MENU })
);
