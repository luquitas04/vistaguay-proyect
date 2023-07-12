import "./nodos.css";
import { localidades } from "../../data/localidades";
import { Button } from "../../components";
import { useEffect } from "react";
import { Xmark } from "../../assets";

export const NodosPage = ({ isActiveNodos, toggleNodos }) => {
  useEffect(() => {
    console.log(isActiveNodos)
  }, [isActiveNodos])

  return (
    <>
      <div className="container"
      style={{
        display: isActiveNodos ? 'flex' : 'none',
        zIndex: isActiveNodos ? 990 : -1,
      }}>
        <div className="grid_nodos">
          {/* <div className="nodos_wrap">   */}
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
            {/* <Button
              className={'btn_close-nodos'}
              onClick={toggleNodos}
              textButton={<Xmark/>}
            /> */}
        {/* </div>   */}
      </div>
    </>
  )
}
