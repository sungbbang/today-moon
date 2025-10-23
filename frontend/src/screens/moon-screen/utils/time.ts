export const formatTime = (time: Date) => {
  if (!time) return '-';

  const hour = time.getHours();
  const minute = time.getMinutes();

  const isAfternoon = hour >= 12;
  const formattedHour = hour % 12 || 12;
  const formattedMinute = String(minute).padStart(2, '0');

  return `${isAfternoon ? '오후' : '오전'} ${formattedHour}:${formattedMinute}`;
};
