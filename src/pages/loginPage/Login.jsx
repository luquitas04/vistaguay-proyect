import "./login.css"
import { Form } from "../../components";
import  Vistaguay  from '../../assets/vistaguayLogoDefault.svg';
import { VlDa } from "../../assets";

export const Login = () => {
  
  return (
    <div className="body_img">
      <div className="width">
        <div className='login_pres'>
              <img className='logo_vsg-s' src={Vistaguay} alt="Vistaguay Logo"/>
              <hr />
              <h3>monitor de nodos</h3>
        </div> 
        <div className="login_form">
          <Form />
          <div className="login_footer">
            <h4>Powered By</h4>
            <a href="https://vistaguay.com/" target="_blank">
              <VlDa style={"logo_vsg"} alt="Vistaguay Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
