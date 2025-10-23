import { useQuery } from '@tanstack/react-query';
import {
  getAddressByCoord,
  type AddressResult,
  type Coordinate,
} from '../screens/moon-screen/api/kakao';

export function useAddressByCoordinate(coordinate: Coordinate) {
  const { lat, lon } = coordinate;

  return useQuery<AddressResult>({
    queryKey: ['address', lat, lon],
    queryFn: () => getAddressByCoord({ lat: lat, lon: lon }),
    enabled: !!lat && !!lon,
    staleTime: 5 * 60 * 1000,
  });
}
