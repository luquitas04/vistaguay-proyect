import "./nodos.css";
import { localidades } from "../../data/localidades";

export const NodosPage = ({ className }) => {

  return (
    <>
      <div className={className}>
        <div className="grid-nodos">
          <div className="nodos-wrap">
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
