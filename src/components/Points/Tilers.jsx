import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from 'ol/format/GeoJSON.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Tilers = ({ cultivoData }) => {

  
    return (
      <MapContainer center={[-32.481271665, -61.24051806]} zoom={12} style={{ height: '500px' }}>
        <TileLayer
          url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=YOUR_MAPTILER_API_KEY"
        />
        {cultivoData.map((cultivo, index) => (
          <Marker
            key={index}
            position={[cultivo.coordenadas[1], cultivo.coordenadas[0]]}
          >
            <Popup>
              <div>
                <p>Tipo de cultivo: {cultivo.tipoCultivo}</p>
                <p>Fecha de inicio: {cultivo.fechaInicio}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }




