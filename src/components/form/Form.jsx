import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from "../index";
import { Register } from '../../pages';
import "./form.css";

export const Form = () => {
  
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    event.preventDefault();
    if (username === 'Lucas' && password === '123456') {
      navigate('/mapa')
    } else { alert('Usuario o contraseña incorrectos') };
    setUsername('');
    setPassword('');
  };

  // Ventana Register
  const [mostrarVentana, setMostrarVentana] = useState(false);

  const opendWindow = () => {
    event.preventDefault();
    setMostrarVentana(!mostrarVentana);
  };
  const closeWindow = () => {
    event.preventDefault();
    setMostrarVentana(false);
  }

  // Visibilidad de contraseña 
  // const [shown,setShown] = useState(true);
  // const switchShown = () => {
  //   event.preventDefault();
  //   setShown(!shown);
  // };

  return (
    <form>
      <div>
        <div className='container'>
          <Input
            className={'inp'}
            placeholder={'email'}
            type={'text'}
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <Input
            className={'inp'}
            placeholder={'contraseña'}
            type={'password'}
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          {/* <Button 
            className={!shown ? 'btn_inp-eye' : 'btn_inp-eyeSlash'} 
            onClick={switchShown} 
          /> */}
          
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
