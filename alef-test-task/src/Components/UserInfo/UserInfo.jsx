import React from 'react'
import { useSelector } from 'react-redux'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import "./UserInfo.scss"

export const UserInfo = () => {

   const userData = useSelector((state) => state.formone.userData)
   const dataChildren = useSelector((state) => state.formtwo.dataChildren)

   return (
      <div className="container">
         <Header />
            <div className="form_out">
               <h3>Персональные данные</h3>
               {userData.map((elem) => (
                  <div className="form_out_1">
                     <div className="out_1">
                        <p className="info_out_1">{elem.name}, {elem.age} лет</p>
                     </div>
                  </div>
               ))}
            <div className="form_out_2">
               <h3>Дети</h3>
               {dataChildren.map((elem) => (
                  <div className="out_2">
                     <p className="info_out_2">{elem.name}, {elem.age} лет</p>
                  </div>
               ))}
            </div>
         </div>
         <Footer />
      </div>
   )
}



