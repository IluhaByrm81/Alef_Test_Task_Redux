import { combineReducers } from "redux";
import { mainPage_Reducer as mainpage } from "./mainPage";
import { formOne_Reducer as formone } from "./formone";
import { formTwo_Reducer as formtwo } from "./formtwo";

export const reducers = combineReducers({
  mainpage,
  formone,
  formtwo,
});
