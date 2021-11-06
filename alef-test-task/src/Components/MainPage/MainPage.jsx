import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import { FormOne } from '../Forms/FormOne'
import { ButtonAdd } from '../Buttons/ButtonAdd'
import { ButtonCross } from '../Buttons/ButtonCross'
import { FormTwo } from '../Forms/FormTwo'
import { Footer } from '../Footer/Footer'
import BtnSave from "../../Images/Button_Save.png"
import "./MainPage.scss"

export const MainPage = () => {

   const [userName, setUserName] = useState("")
   const [userAge, setUserAge] = useState("")
   const [childrenName, setChildrenName] = useState("")
   const [childrenAge, setChildrenAge] = useState("")

   const {setView, button_X} = useSelector((state) => state.mainpage)

   return (
      <div className="container">
         <Header />
         {!setView && button_X ? (
            <div className="forms">
               <FormOne 
               userName={userName}
               userAge={userAge}
               setUserName={setUserName}
               setUserAge={setUserAge}
               />
               <ButtonCross 
               userName={userName}
               userAge={userAge}
               setUserName={setUserName}
               setUserAge={setUserAge}
               />
            </div>
            
            ) : (
               <div className="forms">
                  <FormOne />
                  <ButtonAdd 
                  childrenName={childrenName} 
                  childrenAge={childrenAge}
                  setChildrenName={setChildrenName}
                  setChildrenAge={setChildrenAge}
                  />
                  <FormTwo 
                  childrenName={childrenName} 
                  childrenAge={childrenAge}
                  setChildrenName={setChildrenName}
                  setChildrenAge={setChildrenAge}
                  />

                  <div className="btn_save">
                     <Link to="/userinfo">
                        <img src={BtnSave} alt="save"/>
                     </Link>
                  </div>
               </div>
            )}
            <Footer />
      </div>
   )
}

