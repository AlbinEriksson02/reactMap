  import React from 'react';
  import ReactDOM from 'react-dom';
  import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
  import { Te4 } from './popups/te4'

  export const SampleMap = () => {
    const position = [59.840198377930875, 17.650249600410465];

    return (
      <div style={{ height: '400px', width: '400px', background: 'gray' }}>
        
        <MapContainer center={position} zoom={15} scrollWheelZoom={true}  >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
          <Popup>
              <te4 />
    </Popup>
              
          </Marker>
          

        </MapContainer>
      </div>
    );
  };
