import "./form.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from "../index";
import { Register } from '../../pages';
import { Eye, EyeSlash, User } from "../../assets";

export const Form = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = (event) => {
    event.preventDefault();
    if (username === 'test@gmail.com' && password === 'test') {
      navigate('/mapa')
    } else { alert('Usuario o contraseña incorrectos') };
    setUsername('');
    setPassword('');
  };

  // Ventana Register
  const [mostrarVentana, setMostrarVentana] = useState(false);

  const opendWindow = (event) => {
    event.preventDefault();
    setMostrarVentana(!mostrarVentana);
  };
  const closeWindow = (event) => {
    event.preventDefault();
    setMostrarVentana(false);
  }

  // Visibilidad de contraseña 
  const [shown, setShown] = useState(false);
  const switchShown = (event) => {
    event.preventDefault();
    setShown(!shown);
  };

  return (
    <form>
      <div>
        <div className='div_container'>
          <div className='container_inp'>
            <Input
              className={'inp'}
              placeholder={'email'}
              type={'text'}
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <User className={"user_logo"} />
          </div>
          <div className='container_inp'>
            <Input
              className={'inp'}
              placeholder={'contraseña'}
              type={shown ? 'text' : 'password'}
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              className={'btn_inp-eye'}
              onClick={switchShown}
              textButton={!shown ? <EyeSlash /> : <Eye />}
            />
          </div>

          <Button className={'btn'} textButton={'login'} onClick={login} />
          <Link className='link_form'>¿Olvidaste tu clave?</Link>
        </div>

        <div className='footer_form'>
          <Button className={'btn_link'} textButton={'¿No tienes una cuenta? ¡Registrate!'} onClick={opendWindow} />
          {mostrarVentana && (<Register onClickWindow={closeWindow} />)}
        </div>

      </div>
    </form>
  )
}
