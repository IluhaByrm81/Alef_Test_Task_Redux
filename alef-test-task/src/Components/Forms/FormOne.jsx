import React from 'react'
import "./FormOne.scss"

export const FormOne = ({userName, userAge, setUserName, setUserAge}) => {

   const handleChangeUserName = (event) => {
      setUserName(event.target.value)
   }

   const handleChangeUserAge = (event) => {
      setUserAge(event.target.value)
   }

   return (
      <>
      <h3 className="h3_form_1">Персональные данные</h3>
         <div className="form_1">
            <div className="box_input_1_form_1">Имя
               <input className="input_1" type="text" value={userName} onChange={handleChangeUserName} />
            </div>
            <div className="box_input_1_form_1">Возраст
               <input className="input_1" type="text" value={userAge} onChange={handleChangeUserAge} />
            </div>
         </div>
      </>
   )
}





