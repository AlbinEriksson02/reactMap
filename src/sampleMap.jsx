import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { InfoBox } from './components/InfoBox'
import { countryCoords } from './assets/CountryCoords'

export const SampleMap = () => {
  
  console.log(countryCoords);
  
  return (
    <div style={{ height: '400px', width: '400px', background: 'gray' }}>
      <MapContainer center={countryCoords[0].position} zoom={15} scrollWheelZoom={true}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          countryCoords.map((marker) => (
            <InfoBox position={marker.position} name={marker.name} key={marker.name}/>
          ))
        }
        
      </MapContainer>
    </div>
  );
};
