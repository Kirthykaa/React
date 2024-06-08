import { combineReducers } from "redux";
import {
  productReducer,
  selectedChefReducer,
  selectedPoductReducer,
  userDataReducer,
} from "./productReducer";

const reducers = combineReducers({
  allPdts: productReducer,
  sltPdts: selectedPoductReducer,
  sltChef: selectedChefReducer,
  userData: userDataReducer,
});

export default reducers;
