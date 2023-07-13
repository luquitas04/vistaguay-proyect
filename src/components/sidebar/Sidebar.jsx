import 'animate.css';
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom"
import { Arrow, Chart, MostrarReferencias, Nodos, VlDa } from "../../assets";
import { Button } from '../button/Button';
import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { NodosPage, References, Statistics } from '../../pages';
import Vistaguay from '../../assets/vistaguayLogoDefault.svg';

export const Sidebar = ({ isActive, toggle }) => {

  const navigate = useNavigate();
  const cerrarSesion = () => {
    navigate('/');
  }
  const [isVisible, setIsVisible] = useState(isActive);
  const closeSidebar = () => {
    setIsVisible(false);
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
  
  // Toggle References
  const { toggle: toggleReferences, isActive: isActiveReferences } = useToggle();

  // Toggle Stats
  const { toggle: toggleStats, isActive: isActiveStats } = useToggle();

  return (
    <>
      <div
        className={`sidebar_div ${isVisible ? 'fadeInLeft' : 'fadeOutLeft'}`}
        style={{
          display: isActive ? 'flex' : 'none',
          zIndex: isActive ? 990 : -1,
        }}
        onAnimationEnd={() => {
          if (!isVisible) {
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
            textButton={<Arrow />}
          />
          <nav className='nav'>

            <div className="navLink_div">

              <div className="div_links">
                <Nodos />
                <Button
                  onClick={toggleNodos}
                  className={'navLink'}
                  textButton={'Nodos disponibles'}
                />
              </div>
              <hr />
              <div className="div_links" >
                <MostrarReferencias />
                <Button
                  onClick={toggleReferences}
                  className={'navLink'}
                  textButton={'Mostrar Referencias'}
                />
              </div>
              <hr />

              <div className="div_links" >
                <Chart />
                <Button
                  onClick={toggleStats}
                  className={'navLink'}
                  textButton={'Estadisticas'}
                />
              </div>
              <hr />
            </div>

            <div className="div_users">
              <span>Usuario</span>
              <h4>user.example</h4>
              <Button
                onClick={cerrarSesion}
                className={'btn_users'}
                textButton={'cerrar sesión'}
              />
            </div>
            <hr />

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
      {isActiveReferences && (<References isActiveReferences={isActiveReferences} toggleReferences={toggleReferences} />)}
      {isActiveStats && (<Statistics isActiveStats={isActiveStats} toggleStats={toggleStats} />)}


    </>
  )
}
