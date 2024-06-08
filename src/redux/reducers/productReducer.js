import { menuItems } from "../../components/json/MenuItems";
import { ActionType } from "../constants/action-type";

const initialState = menuItems;

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PDTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedPoductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PDTS:
      return { ...state, sltProducts: payload };
    default:
      return state;
  }
};

export const selectedChefReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_CHEF:
      return { ...state, sltChef: payload };
    default:
      return state;
  }
};

export const userDataReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.USER_DATA:
      return { ...state, userData: payload };
    default:
      return state;
  }
};
