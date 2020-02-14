import * as types from '../constants';

const photosReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BOOTSTRAP_LANDING:
      return {
        ...state,
        photos: action.payload.photos
      };
    default:
      return state;
  }
};

export default photosReducer;
