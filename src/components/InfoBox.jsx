import { Popup, Marker } from 'react-leaflet';
import React from 'react';
import '.././style.css';
import { CountryCall } from '../networking/apiGet';

export const InfoBox = (props) => {
    return (
        <Marker position={props.position}>
            <Popup>
                <h1>{props.name}</h1>
                <CountryCall />
            </Popup>
        </Marker>
    );
}

