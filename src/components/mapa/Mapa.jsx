import "./mapa.css";
import "./map.css";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";

import { useEffect } from 'react';
import { Button } from "../button/Button";

import { useToggle } from '../../hooks/useToggle';
import { Sidebar } from '../sidebar/Sidebar';
import  Vistaguay  from '../../assets/vistaguayLogoDefault.svg';


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

  const {toggle,isActive} = useToggle();
 
  return (
    <div>
      <Button
        onClick={toggle}
        className={`btn_toggle-map animate__animated ${isActive ? 'fadeOutLeft' : 'fadeInLeft'}`}
        style={{ zIndex: isActive ? -1 : 1 }}
        textButton={<img src={Vistaguay} className="img_toggle-map" alt="Logo Vistaguay"/>}
      />
      {isActive &&(<Sidebar isActive={isActive} toggle={toggle}/>)}
      <div style={{ zIndex:0 }} id="map"></div>
    </div>
  );
};
