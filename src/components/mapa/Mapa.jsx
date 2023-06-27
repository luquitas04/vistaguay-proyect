import 'animate.css';

import "./map.css";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";

import { useEffect, useState } from 'react';
import { Sidebar } from "../Sidebar";
import { Button } from "../Button";
import Gravanz from '../../assets/gravanz.svg';
import { NodosPage, References, Statistics } from '../../pages';
import { useToggle } from '../../hooks/useToggle';

export const Mapa = () => {

  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-64, -31]),
        zoom: 8,
      }),
    });
  }, [])

  //  Toggle Sidebar 
  const [clase, setClase] = useState('sidebar_div');
  const [claseBtn, setClaseBtn] = useState('btn-toggle_map');
  const { toggle, isActive } = useToggle();

  const handleButtonClick = () => {
    setClase('index animate__animated animate__fadeInLeft');
    setClaseBtn("indexBtn");
    toggle();
  }
  const cSidebar = () => {
    setClase("sidebar_div");
    setClaseBtn('btn-toggle_map');
    isActiveNodos && tNodos();
    isActiveStats && tStats();
    toggle();
  }
  // Toggle Nodos
  const { toggle: tNodos, isActive: isActiveNodos } = useToggle();
  const [claseNodos, setClaseNodos] = useState('main_div-nodos');
  const showNodos = () => {
    if (!isActiveNodos) {
      setClaseNodos('index-nodos animate__animated animate__fadeIn');
    } else setClaseNodos('main-div-nodos animate__animated animate__fadeOut');
    tNodos();
  }
  // Toggle Referencias
  const { toggle: tRef, isActive: isActiveRef } = useToggle();
  const [claseRef, setClaseRef] = useState('main_div-ref');
  const showReferences = () => {
    if (!isActiveRef) {
      setClaseRef('index-ref animate__animated animate__fadeIn');
    } else setClaseRef('main_div-ref animate__animated animate__fadeOut')
    tRef();
  }
  // Toggle Estadisticas
  const { toggle: tStats, isActive: isActiveStats } = useToggle();
  const [claseStats, setClaseStats] = useState('main_div-stats');
  const showStatistics = () => {
    if (!isActiveStats) {
      setClaseStats('index-stats animate__animated animate__fadeIn');
    } else setClaseStats('main_div-stats animate__animated animate__fadeOut');
    tStats();
  }

  return (
    <>
      <Button
        className={claseBtn}
        onClick={handleButtonClick}
        textButton={<img src={Gravanz} className="img-toggle_map" />}
      />
      {handleButtonClick && (
        <Sidebar
          closeSidebar={cSidebar}
          className={clase}
          showNodos={showNodos}
          showReferences={showReferences}
          showStats={showStatistics}
        />
      )}

      {isActiveNodos && (<NodosPage className={claseNodos} />)}
      {isActiveRef && (<References className={claseRef} />)}
      {isActiveStats && (<Statistics className={claseStats} />)}

      <div id="map"></div>
    </>
  );
};
