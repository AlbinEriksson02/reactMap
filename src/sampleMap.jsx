import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { InfoBox } from './popups/InfoBox'

export const SampleMap = () => {
  const positions = [[59.840198377930875, 17.650249600410465],[59.841025697294626, 17.650178740444606]];
  
  return (
    <div style={{ height: '400px', width: '400px', background: 'gray' }}>
      <MapContainer center={positions[0]} zoom={15} scrollWheelZoom={true}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <InfoBox position= {positions[0]} name='Te4'/>
            <InfoBox position= {positions[1]} name='Rullan'/>
      </MapContainer>
    </div>
  );
};
