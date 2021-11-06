import { mainPage_ActionType } from "./actions";

const initialState = {
  setview: true,
  setFormOne: true,
  setFormTwo: false,
  button_X: true,
  buttonAdd: false,
};

export const mainPage_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case mainPage_ActionType.SET_VIEW:
      return { ...state, setview: action.payload };
    case mainPage_ActionType.SET_FORM_ONE:
      return { ...state, setFormOne: action.payload };
    case mainPage_ActionType.SET_FORM_TWO:
      return { ...state, setFormTwo: action.payload };
    case mainPage_ActionType.BUTTON_ADD:
      return { ...state, buttonAdd: action.payload };
    case mainPage_ActionType.BUTTON_X:
      return { ...state, button_X: action.payload };

    default:
      return state;
  }
};
