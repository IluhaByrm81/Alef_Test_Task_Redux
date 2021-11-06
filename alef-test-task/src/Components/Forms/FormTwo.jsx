import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formTwo_Action } from '../../store/formtwo/action'
import BtnDelete from "../../Images/Btn_delete.png"
import "./FormTwo.scss"

export const FormTwo = ({childrenName, setChildrenName, childrenAge, setChildrenAge}) => {

   const dataChildren = useSelector((state) => state.formtwo.dataChildren)

   const dispatch = useDispatch()

   const handleChangeChildrenName = (event) => {
      setChildrenName(event.target.value)
   }

   const handleChangeChildrenAge = (event) => {
      setChildrenAge(event.target.value)
   }

   const deleteDataChildren = (id) => {
      dispatch(formTwo_Action.deleteData(id))
   }

   return (
      <>
         <h3 className="h3_form_2">Дети</h3>
         <div className="form_2">
            <div className="container_inputs_form_2">
               <div className="box_input_2_form_2">Имя
                  <input className="input_2" type="text" value={childrenName} onChange={handleChangeChildrenName} />
               </div>
               <div className="box_input_2_form_2">Возраст
                  <input class="input_2" type="text" value={childrenAge} onChange={handleChangeChildrenAge} />
               </div>
            </div>
            {dataChildren.map((elem => 
            <div className="container_inputs_form_2">

               <div className="box_input_2_form_2" key={elem.id}>Имя
                  <p className="input_2">{elem.name}</p>
               </div>
               <div className="box_input_2_form_2">Возраст
                  <p class="input_2" type="text">{elem.age}</p>
               </div>
               <div className="btn_delete">
                  <img src={BtnDelete} alt="delete" onClick={() => deleteDataChildren(elem.id)} />
               </div>
            </div>
            ))}
         </div>
      </>
   )
}
