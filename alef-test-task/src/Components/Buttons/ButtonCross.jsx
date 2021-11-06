import React from 'react'
import { useDispatch } from 'react-redux'
import BtnCross from "../../Images/Btn_Cross.png"
import { formOne_Action } from '../../store/formone/actions'
import { mainPage_Actions } from '../../store/mainPage'
import "./Buttons.scss"

export const ButtonCross = ({userName, userAge, setUserName, setUserAge}) => {

   const dispatch = useDispatch()

   const clickAddDataUser = (name, age) => {
      const dataUser = {
         name,
         age,
      }
      dispatch(formOne_Action.addDataUser(dataUser))
      dispatch(mainPage_Actions.button_X(false))
      setUserName("")
      setUserAge("")

   }

   return (
      <div className="btn">
         <img src={BtnCross} alt="" onClick={() => clickAddDataUser(userName, userAge)}/>
      </div>

   )
}




