import "./nodos.css";
import { localidades } from "../../data/localidades";
import { Button } from "../../components";
import { Xmark } from "../../assets";
import { useState } from "react";

export const NodosPage = ({ isActiveNodos, toggleNodos }) => {
  const [isVisible, setIsVisible] = useState(isActiveNodos);
  const closeNodos = () => {
    setIsVisible(false);
    setTimeout(() => toggleNodos(), 700);
  };

  return (
    <>
      <div className={`container ${isVisible ? 'fadein' : 'fadeout'}`}
        style={{
          display: isActiveNodos ? 'flex' : 'none',
          zIndex: isActiveNodos ? 990 : -1,
        }}>
        <Button
          className={'btn_close-nodos'}
          onClick={closeNodos}
          textButton={<Xmark />}
        />
        <div className="grid_nodos">
          <div className="nodos_wrap">
            <div className="nodos">
              <h4>Todos mis nodos</h4>
            </div>
            {
              localidades.map((localidades, index) => (
                <div key={index} className="nodos">
                  <span>{localidades.pueblo}</span>
                  <span>{localidades.provincia}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
