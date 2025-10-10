import React, { useEffect, useRef, useState } from 'react';
import { PiGpsFix } from 'react-icons/pi';
import { usePlaceSearch } from '../../hooks/usePlaceSearch';

function LocationSearchBox({
  onClose,
  setCoordinate,
}: {
  onClose: () => void;
  setCoordinate: React.Dispatch<
    React.SetStateAction<{ lat: number; lon: number }>
  >;
}) {
  const [searchWord, setSearchWord] = useState<string>('');
  const { data, isLoading, error } = usePlaceSearch(searchWord);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCoordinate({
            lat: Number(latitude.toFixed(4)),
            lon: Number(longitude.toFixed(4)),
          });
          onClose();
        },
        error => {
          console.error('현위치 가져오기 실패:', error);
          alert('현위치를 가져올 수 없습니다. 위치 권한을 확인해주세요.');
        },
        { enableHighAccuracy: true },
      );
    } else {
      alert('이 브라우저에서는 위치 정보를 지원하지 않습니다.');
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg sm:text-xl'>위치 검색</h2>
        <button
          onClick={handleUseCurrentLocation}
          className='hidden cursor-pointer hover:underline hover:underline-offset-4 sm:block sm:text-lg'
        >
          현위치
        </button>
        <button
          onClick={handleUseCurrentLocation}
          className='rounded bg-gray-700 p-2 hover:bg-gray-600 sm:hidden'
        >
          <PiGpsFix size={20} />
        </button>
      </div>
      <input
        ref={inputRef}
        value={searchWord}
        onChange={e => setSearchWord(e.target.value)}
        type='text'
        placeholder='검색어를 입력하세요.'
        className='mt-6 w-full rounded border border-gray-600 bg-gray-700 p-2 placeholder-gray-400 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:outline-none sm:text-lg'
      />

      <div className='mt-4 h-72 overflow-y-auto rounded border border-gray-600'>
        {isLoading && (
          <div className='flex h-full items-center justify-center text-sm'>
            검색 중...
          </div>
        )}

        {!isLoading && error && (
          <div className='flex h-full items-center justify-center text-sm text-red-400'>
            검색 중 오류가 발생했습니다.
          </div>
        )}

        {!isLoading && !error && !searchWord && !data && (
          <div className='flex h-full items-center justify-center text-sm'>
            키워드나 주소를 검색해보세요.
          </div>
        )}

        {!isLoading && !error && searchWord && data?.length === 0 && (
          <div className='flex h-full items-center justify-center text-sm'>
            검색 결과가 없습니다.
          </div>
        )}

        {!isLoading && !error && data && (
          <ul>
            {data.map(item => (
              <li
                onClick={() => {
                  setCoordinate({ lat: Number(item.y), lon: Number(item.x) });
                  onClose();
                }}
                key={item.x + item.y}
                className='cursor-pointer border-b border-gray-600 p-2 hover:bg-gray-700'
              >
                <span className='block text-sm sm:text-base'>
                  {item.place_name || item.address_name}
                </span>
                <span className='block text-xs opacity-50 sm:text-sm'>
                  {item.road_address_name || item.address_name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default LocationSearchBox;
