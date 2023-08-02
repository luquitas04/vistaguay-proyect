import "./references.css"
import { Button } from "../../components";
import { useState } from "react";
import { getFetchNodos } from "../../helpers/getFetchNodos";

export const References = ({ toggleReferences, isActiveReferences, data }) => {

  // Toggle
  const [show, setShow] = useState(isActiveReferences);
  const closeReferences = () => {
    setShow(false);
    setTimeout(() => toggleReferences(), 700);
  };

  getFetchNodos()

  return (
    <div
      className={`references_div ${show ? 'fadeInRight' : 'fadeOutRight'}`}
      style={{
        display: isActiveReferences ? 'flex' : 'none',
        zIndex: isActiveReferences ? 1 : -1,
      }}
      onAnimationEnd={() => {
        if (!show) {
          toggleReferences();
        }
      }}
    >
      
      <h4>Todos mis Nodos</h4>

      
      <div className="container_campañas">
      <hr />
      <hr />
      </div>


      <Button
        onClick={closeReferences}
        className={"btn_references"}
        textButton={"cerrar referencias"}
      />
    </div>
  )
}

