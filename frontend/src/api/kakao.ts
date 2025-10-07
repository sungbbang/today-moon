import axios from 'axios';

export interface Place {
  place_name: string;
  address_name: string;
  road_address_name: string;
  x: string;
  y: string;
}

export type AddressResult = {
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
};

export type Coordinate = {
  lat: number;
  lon: number;
};

export const fetchPlaces = async (query: string): Promise<Place[]> => {
  const res = await axios.get('http://localhost:3000/api/kakao/search', {
    params: { query },
  });
  return res.data;
};

export const fetchAddressByCoord = async ({
  lat,
  lon,
}: Coordinate): Promise<AddressResult> => {
  const res = await axios.get('http://localhost:3000/api/kakao/coord2address', {
    params: { lat, lon },
  });
  return res.data;
};
