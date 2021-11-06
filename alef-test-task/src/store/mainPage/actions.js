export const mainPage_ActionType = {
  SET_VIEW: "MAIN_PAGE.SET_VIEW",
  SET_FORM_ONE: "MAIN_PAGE.SET_FORM_ONE",
  SET_FORM_TWO: "MAIN_PAGE.SET_FORM_TWO",
  BUTTON_ADD: "MAIN_PAGE.BUTTON_ADD",
  BUTTON_X: "MAIN_PAGE.BUTTON_X"
};

export const mainPage_Actions = {
  setView: (payload) => ({
    type: mainPage_ActionType.SET_VIEW,
    payload,
  }),
  setFormOne: (payload) => ({
    type: mainPage_ActionType.SET_FORM_ONE,
    payload,
  }),
  setFormTwo: (payload) => ({
    type: mainPage_ActionType.SET_FORM_TWO,
    payload,
  }),
  buttonAdd: (payload) => ({
    type: mainPage_ActionType.BUTTON_ADD,
    payload,
  }),
  button_X:(payload) => ({
   type: mainPage_ActionType.BUTTON_X,
   payload,
 }),
};
