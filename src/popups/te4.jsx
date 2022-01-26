import { Popup, Marker } from 'react-leaflet';
import React from 'react';

export const Te4 = (props) => {
    return (
        <Marker position={props.position}>
            <Popup>
                <h1>Te4</h1>
            </Popup>
        </Marker>
    );
}