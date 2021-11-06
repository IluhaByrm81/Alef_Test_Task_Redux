export const formOne_ActionType = {
   ADD_DATA_USER: "FORM_ONE.ADD_DATA_USER",
 };
 
 export const formOne_Action = {
   addDataUser: (payload) => ({
     type: formOne_ActionType.ADD_DATA_USER,
     payload,
   }),
 };
 