import {
  BUDDY_UPDATE,
  BUDDY_CREATE,
  BUDDIES_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  item: '',
  phone: '',
  platform: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUDDY_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BUDDY_CREATE:
      return INITIAL_STATE;
    case BUDDIES_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
