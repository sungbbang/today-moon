export const IMAGE_COUNT = 29;

export const moonImages: HTMLImageElement[] = [];

export async function preloadMoonImages(count: number): Promise<void> {
  let failedImageIndexes: number[] = [];

  const loadImage = (i: number): Promise<void> => {
    return new Promise<void>(resolve => {
      const img = new Image();

      img.onload = () => {
        moonImages[i] = img;
        resolve();
      };

      img.onerror = () => {
        failedImageIndexes.push(i);
        resolve();
      };

      img.src = `/moon_phase/${i}.jpg`;
    });
  };

  await Promise.all(Array.from({ length: count }, (_, i) => loadImage(i)));

  if (failedImageIndexes.length > 0) {
    console.warn('재시도 이미지 인덱스:', failedImageIndexes);
    const retryIndexes = [...failedImageIndexes];
    failedImageIndexes = [];

    await Promise.all(retryIndexes.map(i => loadImage(i)));
  }
}
