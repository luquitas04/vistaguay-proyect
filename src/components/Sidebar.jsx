import 'animate.css';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

import Gravanz from '../assets/gravanz.svg';
import { Button } from "./Button";
import { Chart, MostrarReferencias, Nodos, VlDa } from "../assets";
import { useToggle } from "../hooks/useToggle";
import { Arrow } from "../assets";

export const Sidebar = ({ className,closeSidebar }) => {

  const {
    toggleTomos,
    toggleStats,
    toggleReferences,
    closeReferences
  } = useToggle();

  return (
    <>
      <div className={className} >
        <Button
          className="btn-logo_arrow"
          onClick={closeSidebar}
          textButton={<Arrow />}
        /> 
        <nav className='nav'>
          <img className='logo_grz' src={Gravanz} alt="Gravanz Logo" />

          <div className="navLink_div">

            <div className="div_links">
              <Nodos />
              <NavLink
                className='navLink'
                onClick={toggleTomos}
              >
                Nodos disponibles
              </NavLink>
            </div>
            <hr />

            <div className="div_links" >
              <MostrarReferencias />
              <NavLink
                className='navLink'
                onClick={toggleReferences}
              >
                Mostrar Referencias
              </NavLink>
            </div>
            <hr />

            <div className="div_links" >
              <Chart />
              <NavLink
                className='navLink'
                onClick={toggleStats}
              >
                Estadisticas
              </NavLink>
            </div>
            <hr />
          </div>

          <div className="div_users">
            <span>Usuario</span>
            <h4>user.example</h4>
            <Button
              className={'btn_users'}
              textButton={'cerrar sesión'}
            />
          </div>
          <hr />

          <div className="footer_sidebar">
            <Link className="link_logo" to={"https://www.vistaguay.com/"} target="_blank">
              desarrollo agtech
            </Link>
            <VlDa />
          </div>
        </nav>
      </div>
    </>
  )
}
