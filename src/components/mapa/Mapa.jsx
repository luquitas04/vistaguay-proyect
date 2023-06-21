import 'animate.css';

import "./map.css";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";

import { useEffect, useState } from 'react';
import { useToggle } from "../../hooks/useToggle";
import { Sidebar } from "../Sidebar";
import { Button } from "../Button";
import Gravanz from '../../assets/gravanz.svg';

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
  const { showWindow, closeWindow } = useToggle();

  const handleButtonClick = () => {
    setClase('index animate__animated animate__fadeInLeft');
    setClaseBtn("indexBtn");
    showWindow();  
  }

  const cSidebar = () => {
    setClase("sidebar_div animate__animated animate__fadeOutLeft"); 
    setClaseBtn('btn-toggle_map');
    closeWindow();
  }

  return (
    <>
      <Button 
        className={claseBtn} 
        onClick={handleButtonClick}
        textButton={ <img src={Gravanz} className="img-toggle_map" />}
      />
        {handleButtonClick &&(<Sidebar closeSidebar={cSidebar} className={clase}/>)}

      <div id="map"></div>
    </>
  )
};