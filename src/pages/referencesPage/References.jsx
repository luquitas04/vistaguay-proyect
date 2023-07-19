import "./references.css"
import { Button } from "../../components";
import { useState } from "react";
import { Arrow } from "../../assets";

export const References = ({ toggleReferences, isActiveReferences, data }) => {

  // Toggle
  const [show, setShow] = useState(isActiveReferences);
  const closeReferences = () => {
    setShow(false);
    setTimeout(() => toggleReferences(), 700);
  };

    // const { features } = useParams()
    // const nodos = getNodos(features)
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
        // textButton={<Arrow className={"arrow_ref"} fill={"var(--darkdisabled)"}/>}
        textButton={"cerrar referencias"}
      />
    </div>
  )
}

