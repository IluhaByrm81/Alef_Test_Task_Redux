import { formTwo_ActionType } from "./action";

const initialState = {
  dataChildren: [],
};

export const formTwo_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case formTwo_ActionType.ADD_DATA:
      return {
        ...state,
        dataChildren: [...state.dataChildren, action.payload],
      };
    case formTwo_ActionType.DELETE_DATA:
      return {
        ...state,
        dataChildren: state.dataChildren.filter(
          (data) => data.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
