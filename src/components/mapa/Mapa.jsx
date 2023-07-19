import "./mapa.css";
import "./map.css";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";

import VectorLayer from "ol/layer/Vector";
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";

import { useEffect, useState } from 'react';
import { Button } from "../button/Button";
import { useToggle } from '../../hooks/useToggle';
import { Sidebar } from '../sidebar/Sidebar';
import { References } from "../../pages";
import Hoja from "../../assets/hoja.svg"
import Vistaguay from '../../assets/vistaguayLogoDefault.svg';

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
        zone,
      ],
      view: new View({
        center: fromLonLat([-64, -31]),
        zoom: 7,
      }),
    });

  // points.getSource().on('change', () => {
  //   if (points.getSource().getState() === 'ready') {
  //     const features = points.getSource().getFeatures();
  //     setPointData(features);
  //   }
  // });

}, []);

// const [pointData, setPointData] = useState([]);
// const points = new VectorLayer({
//   source: new VectorSource({
//     url: 'https://api.maptiler.com/data/8aa5a139-79c9-445f-850c-08befd4e6428/features.json?key=S9agc6Xvaa1CPUnUrgnt',
//     format: new GeoJSON(),
//   }),
//   style: function(feature) {
//     return new Style({
//       stroke: new Stroke({
//         color: '#222222be',
//         width: 7,
//       }),
//       fill: null,
//     });
//   },})

  const zone = new VectorLayer({
    source: new VectorSource({
      url: 'https://api.maptiler.com/data/8aa5a139-79c9-445f-850c-08befd4e6428/features.json?key=S9agc6Xvaa1CPUnUrgnt',
      format: new GeoJSON(),
    }),
    style: function(feature) {
      return new Style({
        stroke: new Stroke({
          color: '#222222be',
          width: 5,
        }),
        fill: null,
      });
    },
  });

  const { toggle, isActive } = useToggle();
  const { toggle:toggleReferences, isActive:isActiveReferences } = useToggle();

  return (
    <div>
      <Button
        onClick={toggle}
        className={`btn_toggle-map animate__animated ${isActive ? 'fadeOutLeft' : 'fadeInLeft'}`}
        style={{ zIndex: isActive ? -1 : 2 }}
        textButton={<img src={Vistaguay} className="img_toggle-map" alt="Logo Vistaguay" />}
      />
      
      {isActive && (<Sidebar isActive={isActive} toggle={toggle} />)}
      
      <Button
        onClick={toggleReferences}
        className={`btn_toggle-references animate__animated ${isActiveReferences ? 'fadeOutRight' : 'fadeInRight'}`}
        style={{ zIndex: isActiveReferences ? -1 : 1 }}
        textButton={<img src={Hoja} className="img_toggle-ref" alt="Toggle Referencias"/>}
      />

      {isActiveReferences && (<References isActiveReferences={isActiveReferences} toggleReferences={toggleReferences} />)}

      {/* <div style={{ zIndex: 1 }} id="points">
      {pointData.map((point, index) => (
        <div key={index}>
        <p>Point ID: {point.getId()}</p>
        <p>Point Geometry: {point.getGeometry().getCoordinates()}</p>
        </div>
        ))}
      </div> */}

      <div style={{ zIndex: 0 }} id="map"></div>
    </div>
  );
};
