import "./references.css"
import { Button } from "../../components";
import { useState } from "react";
import Silobolsas from "../../data/Silobolsas_San_Genaro.json"
import { useParams } from "react-router";
import { getNodos } from "../../helpers/getNodos";

export const References = ({ toggleReferences, isActiveReferences, data }) => {

  // Toggle
  const [show, setShow] = useState(isActiveReferences);
  const closeReferences = () => {
    setShow(false);
    setTimeout(() => toggleReferences(), 700);
  };

    // const { features } = useParams()
    const nodos = getNodos(features)
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

      <hr />
      
      <div className="container_campañas">
      
      </div>

      <hr />

      <Button
        onClick={closeReferences}
        className={"btn_references"}
        textButton={"Cerrar Referencias"}
      />
    </div>
  )
}

