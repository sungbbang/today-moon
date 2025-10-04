import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import LocationModal from './LocationModal';
import LocationSearchBox from './LocationSearchBox';

function LocationContainer() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className='flex w-full max-w-md items-center justify-between gap-4'>
      <h3 className='text-xl md:text-2xl'>서울</h3>

      <button
        onClick={() => setIsModalOpen(true)}
        className='hidden cursor-pointer hover:underline hover:underline-offset-4 sm:block md:text-lg'
      >
        지역 선택
      </button>

      <button
        onClick={() => setIsModalOpen(true)}
        className='cursor-pointer rounded bg-gray-700 p-2 hover:bg-gray-600 sm:hidden'
      >
        <IoLocationOutline size={20} />
      </button>

      {isModalOpen && (
        <LocationModal onClose={() => setIsModalOpen(false)}>
          <LocationSearchBox onClose={() => setIsModalOpen(false)} />
        </LocationModal>
      )}
    </div>
  );
}

export default LocationContainer;
