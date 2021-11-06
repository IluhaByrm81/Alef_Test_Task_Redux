import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formTwo_Action } from '../../store/formtwo/action'
import BtnAdd from "../../Images/Button_Add_Data.png"
import "./Buttons.scss"


export const ButtonAdd = ({childrenName, childrenAge, setChildrenName, setChildrenAge}) => {

   const dataChildren = useSelector((state) => state.formtwo.dataChildren)
   const dispatch = useDispatch()

   const addDataInfo = (name, age) => {

      const dataChildren = {
         id: (Math.random() * 10).toFixed(1),
         name,
         age,
      }
      dispatch(formTwo_Action.addData(dataChildren))
      setChildrenName("")
      setChildrenAge("")
   }

   return (
      <div className="btn">
         {dataChildren.length > 4 ? (
            <img src={BtnAdd} alt="" style={{display: "none"}} onClick={() => addDataInfo(childrenName, childrenAge)}/>
         ) : (
            <img src={BtnAdd} alt="" style={{display: "block"}} onClick={() => addDataInfo(childrenName, childrenAge)}/>
         )}
      </div>
)
}

