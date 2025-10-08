import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import LocationSearchBox from './LocationSearchBox';
import { useAddressByCoordinate } from '../../hooks/useAddressFromCoord';
import { IoEarthOutline } from 'react-icons/io5';
import Modal from '../Modal';

type LocationContainerProps = {
  coordinate: { lat: number; lon: number };
  setCoordinate: React.Dispatch<
    React.SetStateAction<{ lat: number; lon: number }>
  >;
};

function LocationContainer({
  coordinate,
  setCoordinate,
}: LocationContainerProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useAddressByCoordinate(coordinate);

  const address =
    data &&
    `${data.region_2depth_name} ${data.region_3depth_name.split(' ')[0]}`;

  return (
    <div className='w-full max-w-lg'>
      <div className='flex items-center justify-between rounded-md'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-sm sm:text-xl'>
            {isLoading
              ? '로딩 중...'
              : address
                ? address
                : '주소를 불러올 수 없음'}
          </h3>
          <span className='flex items-center gap-2 text-xs text-gray-400 sm:text-sm'>
            <IoEarthOutline size={18} className='text-sky-500' />
            {coordinate.lat.toFixed(4)}, {coordinate.lon.toFixed(4)}
          </span>
        </div>

        <div className='flex gap-2'>
          <button
            onClick={() => setIsModalOpen(true)}
            className='hidden rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm hover:bg-gray-600 sm:block'
          >
            지역 선택
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className='rounded bg-gray-700 p-2 hover:bg-gray-600 sm:hidden'
          >
            <IoLocationOutline size={20} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <LocationSearchBox
            onClose={() => setIsModalOpen(false)}
            setCoordinate={setCoordinate}
          />
        </Modal>
      )}
    </div>
  );
}

export default LocationContainer;
