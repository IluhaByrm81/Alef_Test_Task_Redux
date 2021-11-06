import { formOne_ActionType } from "./actions";

const initialState = {
   userData: [],
   };
   
   export const formOne_Reducer = (state = initialState, action) => {
     switch (action.type) {
       case formOne_ActionType.ADD_DATA_USER:
         return {...state, userData: [...state.userData, action.payload]};
       default:
         return state;
     }
   };
   