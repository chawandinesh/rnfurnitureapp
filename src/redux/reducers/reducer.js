import {
  ADD_FURN,
  REMOVE_FURN,
  UPDATE_FURN,
} from '../actionTypes/furnActionTypes';

const initialState = {
  livingRoomFurn: [],
  dinningRoomFurn: [],
  bedRoomFurn: [],
  officeFurn: [],
  sofasAndArmchairs:[],
  tablesAndChairs:[],
  storageSystemUnits:[],
  sleepingChildrenBedrooms:[],
  kidsFurn:[],
  furnComponentsHardware:[],
  others:[]

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FURN:
      return {
        ...state,
        [action.tempKey]: [...state[action.tempKey], action.data],
      };
    case REMOVE_FURN:
      return {
        ...state,
        [action.tempKey]: state[action.tempKey].filter(
          (e, idx) => idx !== action.index,
        ),
      };
    case UPDATE_FURN:
      state[action.tempKey][action.index] = action.data;
      return {
        ...state
      };

    default:
      return state;
  }
};

export {reducer};
