import {Dimensions} from 'react-native';
import dayjs from 'dayjs';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const TITLE_TEXT_COLOR = '#1B181C';
export const DARK_GREY = '#8A898E';
export const PINK_ACCENT = '#D49499';
export const GREY_INACTIVE = '#C2C2C2';

export const getDuration = durationSec => {
  return dayjs.duration({seconds: durationSec}).asMinutes();
};
