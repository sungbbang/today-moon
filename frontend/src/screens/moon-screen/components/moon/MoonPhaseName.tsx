import { getMoonPhaseName } from '../../utils/moon';

function MoonPhaseName({ imageIdx }: { imageIdx: number }) {
  const { ko } = getMoonPhaseName(imageIdx);

  return (
    <div className='text-center'>
      <span className='text-xl font-bold tracking-wide sm:text-2xl'>{ko}</span>
    </div>
  );
}

export default MoonPhaseName;
