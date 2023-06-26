import 'animate.css';
import { Link } from "react-router-dom"

import { Button } from "./Button";
import Gravanz from '../assets/gravanz.svg';
import { Arrow,Chart, MostrarReferencias, Nodos, VlDa } from "../assets";

export const Sidebar = ({ className,closeSidebar,showNodos,showReferences,showStats }) => {

  return (
    <>
      <div className={ className } >
        <Button
          className="btn-logo_arrow"
          onClick={ closeSidebar }
          textButton={<Arrow />}
        /> 
        <nav className='nav'>
          <img className='logo_grz' src={ Gravanz } alt="Gravanz Logo" />

          <div className="navLink_div">

            <div className="div_links">
                <Nodos />
              <Button
                className={'navLink'}
                onClick={ showNodos }
                textButton={'Nodos disponibles'}
              />
            </div>
            <hr />

            <div className="div_links" >
                <MostrarReferencias />
              <Button
                className={'navLink'}
                onClick={ showReferences }
                textButton={'Mostrar Referencias'}
              />
            </div>
            <hr />

            <div className="div_links" >
                <Chart />
              <Button
                className={'navLink'}
                onClick={ showStats }
                textButton={'Estadisticas'}
              />
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
