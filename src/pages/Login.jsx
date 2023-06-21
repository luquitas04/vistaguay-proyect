import { Form } from "../components";
import Gravanz from '../assets/gravanz.svg';
import Vistaguay from '../assets/vistaguay.svg';

export const Login = () => {
  
  return (
    <div className="body_img">
      <div className="width">
        <div className='login_pres'>
              <img className='logo_grz' src={Gravanz} alt="Gravanz Logo"/>
              <hr />
              <h3>monitor de nodos</h3>
        </div> 
        <div className="login_form">
          <Form />
          <div className="login_footer">
            <h4>Powered By</h4>
            <a href="https://vistaguay.com/" target="_blank">
              <img className="logo_vsg" src={Vistaguay} alt="Vistaguay Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
