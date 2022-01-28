import { Popup, Marker } from 'react-leaflet';
import React from 'react';
import '.././style.css';

export const InfoBox = (props) => {
    return (
        <Marker position={props.position}>
            <Popup>
                <h1>{props.name}</h1>
            </Popup>
        </Marker>
    );
}

