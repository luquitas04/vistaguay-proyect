import 'animate.css';
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom"
import { Arrow, Chart, Nodos, VlDa } from "../../assets";
import { Button } from '../button/Button';
import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { NodosPage, Statistics } from '../../pages';
import Vistaguay from '../../assets/vistaguayLogoDefault.svg';

export const Sidebar = ({ isActive, toggle }) => {

  const navigate = useNavigate();
  const cerrarSesion = () => {
    navigate('/');
  }
  const [show, setShow] = useState(isActive);
  const closeSidebar = () => {
    setShow(false);
    if (isActiveNodos) {
      setTimeout(() => toggleNodos(), 100);
    }
    if (isActiveStats) {
      setTimeout(() => toggleStats(), 100);
    }
    setTimeout(() => toggle(), 700);
  };

  // Toggle Nodos
  const { toggle: toggleNodos, isActive: isActiveNodos } = useToggle();
  const tNodos = () => {
    if (isActiveStats) {
      setTimeout(() => toggleStats(), 100);
    };
    toggleNodos();
  };

  // Toggle Stats
  const { toggle: toggleStats, isActive: isActiveStats } = useToggle();
  const tStats = () => {
    if (isActiveNodos) {
      setTimeout(() => toggleNodos(), 100);
    };
    toggleStats();
  };

  return (
    <>
      <div
        className={`sidebar_div ${show ? 'fadeInLeft' : 'fadeOutLeft'}`}
        style={{
          display: isActive ? 'flex' : 'none',
          zIndex: isActive ? 990 : -1,
        }}
        onAnimationEnd={() => {
          if (!show) {
            toggle();
          }
        }}
      >
        <div className='container_logo'>
          <Link to={"https://www.vistaguay.com/"} target="_blank">
            <img src={Vistaguay} className='logo_sidebar' alt="Logo Vistaguay" />
          </Link>
        </div>
        <div className='sidebar_content'>

          <Button
            className="btn-logo_arrow"
            onClick={closeSidebar}
            textButton={<Arrow className={"arrow-icon"}/>}
          />
          <nav className='nav'>

            <div className="navLink_div">
              <hr />
              <div className="div_links">
                <Nodos />
                <Button
                  onClick={tNodos}
                  className={'navLink'}
                  textButton={'Nodos disponibles'}
                />
              </div>
              <hr />

              <div className="div_links" >
                <Chart />
                <Button
                  onClick={tStats}
                  className={'navLink'}
                  textButton={'Estadisticas'}
                />
              </div>
              <hr />
            </div>
            <div className="div_users">
              <hr />
              <span>Usuario</span>
              <h4>user.example</h4>
              <Button
                onClick={cerrarSesion}
                className={'btn_users'}
                textButton={'cerrar sesión'}
              />
              <hr />
            </div>

            <div className="footer_sidebar">
              <Link className="link_logo" to={"https://www.vistaguay.com/"} target="_blank">
                desarrollo agtech
                <VlDa />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      {isActiveNodos && (<NodosPage isActiveNodos={isActiveNodos} toggleNodos={toggleNodos} />)}
      {isActiveStats && (<Statistics isActiveStats={isActiveStats} toggleStats={toggleStats} />)}
    </>
  )
}
