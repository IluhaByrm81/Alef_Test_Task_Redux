export const formTwo_ActionType = {
  ADD_DATA: "FORM_TWO.ADD_DATA",
  DELETE_DATA: "FORM_TWO.DELETE_DATA",
};

export const formTwo_Action = {
  addData: (payload) => ({
    type: formTwo_ActionType.ADD_DATA,
    payload,
  }),
  deleteData: (payload) => ({
    type: formTwo_ActionType.DELETE_DATA,
    payload,
  }),
};
