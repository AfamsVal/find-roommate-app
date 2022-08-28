import { useEffect, useState } from "react";
import { GeoData } from ".";

export const useGeolocation = () => {
  const [data, setGeoData] = useState<GeoData>({
    country_code: "",
    country_name: "",
    city: "",
    postal: "",
    latitude: 0,
    longitude: 0,
    IPv4: "",
    state: "",
  });

  useEffect(() => {
    const getDeviceLocationData = async () => {
      try {
        const res = await fetch("https://geolocation-db.com/json/");
        const result = await res.json();
        setGeoData(result);
      } catch (error) {
        setGeoData({
          country_code: "",
          country_name: "",
          city: "",
          postal: "",
          latitude: 0,
          longitude: 0,
          IPv4: "",
          state: "",
        });
      }
    };
    getDeviceLocationData();
  }, []);

  return { data };
};
