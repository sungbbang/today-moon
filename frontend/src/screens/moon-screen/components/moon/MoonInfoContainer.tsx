import { getMoonPosition, getMoonTimes } from '../../utils/moon';
import { WiMoonrise, WiMoonset } from 'react-icons/wi';
import { MdLocationPin } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb';
import MoonInfoItem from './MoonInfoItem';
import { formatTime } from '../../utils/time';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { useRegionByCoordinate } from '../../../../hooks/useRegionFromCoord';
import { parseRegion } from '../../utils/location';

const DEFAULT_REGION = '서울';

function MoonInfoContainer({ date }: { date: Date }) {
  const {
    location: { latitude, longitude },
    isCurrentLocation,
  } = useCurrentLocation();

  const { rise, set } = getMoonTimes(date, latitude, longitude);
  const { distance } = getMoonPosition(date, latitude, longitude);

  const { data, isLoading } = useRegionByCoordinate(
    { lat: latitude, lon: longitude },
    isCurrentLocation,
  );

  const region = isCurrentLocation
    ? data
      ? parseRegion(
          data.region_1depth_name,
          data.region_2depth_name,
          data.region_3depth_name,
        )
      : '알 수 없음'
    : DEFAULT_REGION;

  const LoadingSpinner = () => {
    return (
      <div className='flex items-center justify-center'>
        <div className='h-5 w-5 animate-spin rounded-full border-4 border-t-4 border-gray-500 border-t-gray-200'></div>
      </div>
    );
  };

  return (
    <div className='mt-6 w-full max-w-sm'>
      <div className='w-full rounded-2xl border border-white/20 bg-white/5'>
        {rise < set ? (
          <>
            <MoonInfoItem
              label='월출'
              icon={<WiMoonrise className='text-2xl text-yellow-400' />}
              value={isLoading ? <LoadingSpinner /> : formatTime(rise)}
            />
            <MoonInfoItem
              label='월몰'
              icon={<WiMoonset className='text-2xl text-indigo-400' />}
              value={isLoading ? <LoadingSpinner /> : formatTime(set)}
            />
          </>
        ) : (
          <>
            <MoonInfoItem
              label='월몰'
              icon={<WiMoonset className='text-2xl text-indigo-400' />}
              value={isLoading ? <LoadingSpinner /> : formatTime(set)}
            />
            <MoonInfoItem
              label='월출'
              icon={<WiMoonrise className='text-2xl text-yellow-400' />}
              value={isLoading ? <LoadingSpinner /> : formatTime(rise)}
            />
          </>
        )}
        <MoonInfoItem
          label='거리'
          icon={<TbRulerMeasure className='text-2xl text-green-400' />}
          value={
            isLoading ? (
              <LoadingSpinner />
            ) : (
              `${Math.round(distance).toLocaleString('ko-KR')}km`
            )
          }
        />
        <MoonInfoItem
          label='위치'
          icon={<MdLocationPin className='text-2xl text-red-400' />}
          value={isLoading ? <LoadingSpinner /> : region}
        />
      </div>
    </div>
  );
}

export default MoonInfoContainer;
