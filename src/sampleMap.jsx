import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { InfoBox } from './components/InfoBox'
import { countryCoords } from './assets/CountryCoords'

export const SampleMap = () => {

  var southWest = L.latLng(-240, 240),
    northEast = L.latLng(240, -240),
    bounds = L.latLngBounds(southWest, northEast);

  return (
    <div style={{background: 'black' }}>
      <MapContainer center={countryCoords[0].position} zoom={3} scrollWheelZoom={true} minZoom={3} maxBounds={bounds}>
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
