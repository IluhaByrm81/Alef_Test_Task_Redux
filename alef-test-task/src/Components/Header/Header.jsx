import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Images/Logo_imi_horizontal.png"
import "../Header/Header.scss"

export const Header = () => {
   return (
      <header className="header">
            <img className="logo" src={Logo} alt="logo"/>
         <div className="preview">
            <Link to="/">
               <p>Форма</p>
            </Link>
            <Link to="/userinfo">
               <p>Превью</p>
            </Link>
         </div>
         <div></div>
      </header>
   )
}




