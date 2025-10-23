import * as SunCalc from 'suncalc';

export function getMoonTimes(date: Date, latitude: number, longitude: number) {
  const { set, rise, alwaysUp, alwaysDown } = SunCalc.getMoonTimes(
    date,
    latitude,
    longitude,
  );
  return { set, rise, alwaysUp, alwaysDown };
}

export function getMoonPosition(
  date: Date,
  latitude: number,
  longitude: number,
) {
  const { distance } = SunCalc.getMoonPosition(date, latitude, longitude);
  return { distance };
}

export function getMoonPhase(timeAndDate: Date) {
  const { phase } = SunCalc.getMoonIllumination(timeAndDate);
  return phase;
}

export function getMoonPhaseName(imageIdx: number) {
  if (imageIdx === 0) {
    return { ko: '삭', en: 'new moon' };
  }
  if (1 <= imageIdx && imageIdx <= 7) {
    return { ko: '초승달', en: 'waxing crescent' };
  }
  if (imageIdx === 8) {
    return { ko: '상현달', en: 'first quarter' };
  }
  if (9 <= imageIdx && imageIdx <= 14) {
    return { ko: '상현망간의 달', en: 'waxing gibbous' };
  }
  if (imageIdx === 15 || imageIdx === 16) {
    return { ko: '보름달', en: 'full moon' };
  }
  if (17 <= imageIdx && imageIdx <= 21) {
    return { ko: '하현망간의 달', en: 'waning gibbous' };
  }
  if (imageIdx === 22) {
    return { ko: '하현달', en: 'third quarter' };
  }
  if (23 <= imageIdx && imageIdx <= 29) {
    return { ko: '그믐달', en: 'waning crescent' };
  }
  return { ko: '', en: '' };
}

export const moonPhaseDescriptions: Record<string, string> = {
  삭: '음력 1일경, 태양과 지구 사이에 위치해 달의 앞면이 어둡게 가려 보이지 않습니다. 주로 동쪽 하늘에서 해와 함께 떠 있으며, 관측은 어렵습니다.',

  초승달:
    '서쪽 하늘에서 잠깐 보이는 가느다란 달입니다. 낮에는 햇빛에 가려 보이지 않고, 해질 무렵 잠깐 관측할 수 있습니다. 달이 조금씩 차오르기 시작하는 모습입니다.',

  상현달:
    '달의 오른쪽 절반이 밝게 보이는 시기입니다. 오후~저녁 동쪽에서 떠서 밤 중반에 남쪽 하늘에서 관찰할 수 있으며, 달이 점차 차오르는 과정의 중간 단계입니다.',

  '상현망간의 달':
    '상현달과 보름달 사이에 나타나는 달로, 오후에 동쪽에서 떠서 밤 동안 관찰할 수 있습니다. 보름달을 향해 달이 점점 차오르는 모습이며, 왼쪽 부분이 약간 찌그러진 형태입니다.',

  보름달:
    '달이 완전히 둥글게 차오른 모습으로, 음력 15일경 밤하늘 전체에서 관찰할 수 있습니다. 이 시기 지구, 달, 태양이 일직선을 이루면 월식이 발생할 수 있습니다.',

  '하현망간의 달':
    '보름달 이후 하현달로 넘어가는 중간 단계의 달로, 해가 진 후 동쪽에서 떠서 밤 동안 관찰 가능하며, 달의 오른쪽 부분이 약간 찌그러진 모습입니다.',

  하현달:
    '달의 왼쪽 절반이 밝게 보이는 시기입니다. 해가 진 후 동쪽에서 떠서 밤 동안 관찰할 수 있으며, 달이 점차 기우는 모습입니다.',

  그믐달:
    '달의 왼쪽 일부만 가늘게 보이는 눈썹 모양입니다. 주로 새벽 동쪽 하늘에서 떠서 해가 뜨기 전까지만 관찰 가능하며, 달이 점점 작아지며 삭 직전 마지막 형태입니다.',
};
