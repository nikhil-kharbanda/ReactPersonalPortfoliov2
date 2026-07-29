/* src/components/Contact/ContactMap.js */

import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const ContactMap = () => {
    return (
        <MapContainer center={[43.5826, -79.7551]} zoom={12} scrollWheelZoom={false} zoomControl={false} dragging={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[43.5826, -79.7551]} />
        </MapContainer>
    )
}

export default ContactMap
