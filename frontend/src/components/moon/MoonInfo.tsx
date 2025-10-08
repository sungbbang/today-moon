import { WiMoonrise, WiMoonset } from 'react-icons/wi';
import MoonPhaseName from './MoonPhaseName';
import { getMoonPhaseName, moonPhaseDescriptions } from '../../utils/moon';

function MoonInfo({
  imageIdx,
  set,
  rise,
}: {
  imageIdx: number;
  set: Date;
  rise: Date;
}) {
  const { ko, en } = getMoonPhaseName(imageIdx);

  const formatHHMM = (date: Date) => {
    if (!date) return '-';
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <MoonPhaseName nameKo={ko} nameEn={en} />
      <div className='mt-6 w-full max-w-lg rounded-2xl bg-gray-800/70 p-4 shadow-xl backdrop-blur-md'>
        <div className='grid grid-cols-2 gap-6 text-center'>
          <div className='flex flex-col items-center justify-center gap-2 rounded-xl bg-gray-700/50 p-2 shadow-md transition hover:bg-gray-600/50'>
            <div className='flex items-center justify-center gap-1'>
              <WiMoonrise className='text-yellow-500' size={28} />
              <span className='font-medium sm:text-lg'>월출</span>
            </div>
            <span className='tracking-wide opacity-75 sm:text-lg'>
              {formatHHMM(rise)}
            </span>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 rounded-xl bg-gray-700/50 p-2 shadow-md transition hover:bg-gray-600/50'>
            <div className='flex items-center justify-center gap-1'>
              <WiMoonset className='text-gray-500' size={28} />
              <span className='font-medium sm:text-lg'>월몰</span>
            </div>
            <span className='tracking-wide opacity-75 sm:text-lg'>
              {formatHHMM(set)}
            </span>
          </div>
        </div>
      </div>

      <div className='w-full max-w-lg rounded-2xl bg-gray-800/70 p-4 shadow-xl backdrop-blur-md'>
        <p className='text-sm sm:text-base'>{moonPhaseDescriptions[ko]}</p>
      </div>
    </>
  );
}

export default MoonInfo;
