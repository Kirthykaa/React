import { ActionType } from "../constants/action-type";

export const setPdts = (pdts) => {
  return {
    type: ActionType.SET_PDTS,
    payload: pdts,
  };
};

export const selectedPdts = (pdts) => {
  return {
    type: ActionType.SELECTED_PDTS,
    payload: pdts,
  };
};

export const selectedChef = (chef) => {
  return {
    type: ActionType.SELECTED_CHEF,
    payload: chef,
  };
};

export const userData = (data) => {
  return {
    type: ActionType.USER_DATA,
    payload: data,
  };
};
