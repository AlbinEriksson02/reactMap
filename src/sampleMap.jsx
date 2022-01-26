import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { InfoBox } from './components/InfoBox'

export const SampleMap = () => {
  const data = [{position: [59.840198377930875, 17.650249600410465], name: 'Te4'}, {position: [59.841025697294626, 17.650178740444606], name: 'Rullan'},];
  console.log(data);
  
  return (
    <div style={{ height: '400px', width: '400px', background: 'gray' }}>
      <MapContainer center={data[0].position} zoom={15} scrollWheelZoom={true}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          data.map((marker) => (
            <InfoBox position={marker.position} name={marker.name} key={marker.name}/>
          ))
        }
        
      </MapContainer>
    </div>
  );
};
