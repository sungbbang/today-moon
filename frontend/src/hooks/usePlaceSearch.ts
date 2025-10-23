import { useQuery } from '@tanstack/react-query';
import { getPlaces, type Place } from '../screens/moon-screen/api/kakao';
import { useDebounce } from './useDebounce';

export const usePlaceSearch = (searchWord: string) => {
  const debouncedSearch = useDebounce(searchWord, 500);

  return useQuery<Place[]>({
    queryKey: ['search', debouncedSearch],
    queryFn: () => getPlaces(debouncedSearch),
    enabled: debouncedSearch.length >= 2,
    staleTime: 1000 * 60 * 5,
    placeholderData: previousData => previousData,
  });
};
