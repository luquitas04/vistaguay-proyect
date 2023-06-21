import { useState } from "react";
import { Button, Input } from "../components";
import { useNavigate } from "react-router";

export const Register = ({ onClickWindow }) => {
  
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const submitRegister = () => {
    event.preventDefault();

    if ( username === 'Lucas' && password === '123' && mail === 'lucas@mail.com') {
      navigate('/mapa') } else {
        alert('Hay campos que estan mal');
      }
  }

  return (
    <div className="register_div">
      <div className="register_bg">

        <form className="form_register">

          <h4>Registrate</h4>

          <Input
            className={'register_inp'}
            type={'text'}
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder={'ingresa tú nombre'}
          />
          <Input
            className={'register_inp'}
            type={'email'}
            value={mail}
            onChange={event => setMail(event.target.value)}
            placeholder={'email'}
          />
          <Input
            className={'register_inp'}
            type={'password'}
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder={'contraseña'}
          />

          <div>
            <Button onClick={submitRegister} className={'btn_form-register'} textButton={'registrate'}/>
          </div>
          
        </form>

        <div className="div_closeWindow-register">
          <Button className={'btn_closeWindow-register '} onClick={onClickWindow} textButton={'Salir del Registro'} />
        </div>

      </div>
    </div>
  );
}