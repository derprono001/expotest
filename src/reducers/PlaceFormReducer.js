import {
  PLACE_UPDATE,
  PLACE_CREATE,
  PLACES_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  item: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLACE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PLACE_CREATE:
      return INITIAL_STATE;
    case PLACES_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
