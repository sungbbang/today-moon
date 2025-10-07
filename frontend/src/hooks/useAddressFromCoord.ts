import { useQuery } from '@tanstack/react-query';
import {
  fetchAddressByCoord,
  type AddressResult,
  type Coordinate,
} from '../api/kakao';

export function useAddressByCoordinate(coordinate: Coordinate) {
  const { lat, lon } = coordinate;

  return useQuery<AddressResult>({
    queryKey: ['address', lat, lon],
    queryFn: () => fetchAddressByCoord({ lat, lon }),
    enabled: !!lat && !!lon,
    staleTime: 5 * 60 * 1000,
  });
}
