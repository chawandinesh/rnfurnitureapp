import {
  ADD_FURN,
  REMOVE_FURN,
  UPDATE_FURN,
} from '../actionTypes/furnActionTypes';

const atnAddFurn = (data, tempKey) => {
  return {
    type: ADD_FURN,
    data,
    tempKey,
  };
};

const atnRemoveFurn = (tempKey, index) => {
  return {
    type: REMOVE_FURN,
    index,
    tempKey,
  };
};

const atnUpdateFurn = (data, tempKey, index) => {
  return {
    type: UPDATE_FURN,
    data,
    tempKey,
    index,
  };
};

export {atnAddFurn, atnRemoveFurn, atnUpdateFurn};
