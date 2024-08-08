import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export type CoordType = { lat: string; long: string };

const Geolocation = ({ coords }: { coords: CoordType }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
  };
  const center = {
    lat: +coords.lat,
    lng: +coords.long,
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Geolocation;
