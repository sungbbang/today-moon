export function parseRegion(
  region1: string,
  region2: string,
  region3: string,
): string {
  // 1,2 뎁스 합치기
  const address = region2 ? `${region1} ${region2}` : region1;
  const parts = address.split(' ');

  // "구" 있는 경우 우선 선택
  const gu = parts.find(p => p.endsWith('구'));

  // "구"가 없으면 시/군 선택
  let sigun = parts.find(p => p.endsWith('시') || p.endsWith('군')) || '';
  // 길게 나온 특수 시/도명 축약
  sigun = sigun.replace(/특별자치시|광역시|특별시/g, '시').trim();

  const mainRegion = gu ? gu.trim() : sigun;

  return `${mainRegion} ${region3 || ''}`.trim();
}
