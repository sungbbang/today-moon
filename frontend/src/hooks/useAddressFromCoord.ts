import { useQuery } from '@tanstack/react-query';
import {
  fetchAddressByCoord,
  type AddressResult,
  type Coordinate,
} from '../api/kakao';

export function useAddressByCoordinate(coordinate: Coordinate) {
  const { lat, lon } = coordinate;
  const roundedLat = Number(lat.toFixed(4));
  const roundedLon = Number(lon.toFixed(4));

  return useQuery<AddressResult>({
    queryKey: ['address', roundedLat, roundedLon],
    queryFn: () => fetchAddressByCoord({ lat: roundedLat, lon: roundedLon }),
    enabled: !!roundedLat && !!roundedLon,
    staleTime: 5 * 60 * 1000,
  });
}
