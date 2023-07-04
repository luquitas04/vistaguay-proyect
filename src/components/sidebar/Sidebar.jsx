import 'animate.css';
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom"
import Gravanz from '../../assets/gravanz.svg';
import { Arrow,Chart, MostrarReferencias, Nodos, VlDa } from "../../assets";
import { Button } from '../button/Button';

export const Sidebar = ({ className,closeSidebar,showNodos,showReferences,showStats }) => {
  
  const navigate = useNavigate();
  const cerrarSesion = () => {
    navigate('/');
  }

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
              onClick={cerrarSesion}
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
