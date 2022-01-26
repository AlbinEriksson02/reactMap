import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { Te4 } from './popups/te4'

export const SampleMap = () => {
  const position_te4 = [59.840198377930875, 17.650249600410465];
  console.log(position_te4);
  return (
    <div style={{ height: '400px', width: '400px', background: 'gray' }}>
      <MapContainer center={position_te4} zoom={15} scrollWheelZoom={true}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Te4 position= {position_te4}/>
      </MapContainer>
    </div>
  );
};
