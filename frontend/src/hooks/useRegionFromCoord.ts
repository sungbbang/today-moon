import { useQuery } from '@tanstack/react-query';
import {
  getRegionByCoord,
  type RegionResult,
  type Coordinate,
} from '../screens/moon-screen/api/kakao';

export function useRegionByCoordinate(
  coordinate: Coordinate,
  isCurrentLocation: boolean,
) {
  const { lat, lon } = coordinate;

  return useQuery<RegionResult>({
    queryKey: ['region', lat, lon],
    queryFn: () => getRegionByCoord({ lat, lon }),
    enabled: isCurrentLocation && !!lat && !!lon,
    staleTime: 10 * 60 * 1000,
  });
}
