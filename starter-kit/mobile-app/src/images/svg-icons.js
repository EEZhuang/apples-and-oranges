import * as React from 'react';
import { Svg, Path, Circle } from 'react-native-svg';

export const HomeIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M16.61,2.21a1,1,0,0,0-1.24,0L1,13.42,2.24,15,4,13.62V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V13.63L29.76,15,31,13.43ZM18,26H14V18h4Zm2,0h0V18a2,2,0,0,0-2-2H14a2,2,0,0,0-2,2v8H6V12.06L16,4.27l10,7.8V26Z'>
      </Path>
    </Svg>
  );
};

export const AddIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d="M16,4c6.6,0,12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16S9.4,4,16,4 M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14 S23.7,2,16,2z"/>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"/>
    </Svg>
  );
};


export const ChatIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
          d='M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z'>
      </Path>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
          d='M8 10H24V12H8zM8 16H18V18H8z'>
      </Path>
    </Svg>
  );
};

export const MapIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M16,10a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z'>
      </Path>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M16,4a8.88,8.88,0,0,1,9,8.71,8.47,8.47,0,0,1-1.79,5.21l0,0,0,0L16,28.46,8.85,18l0,0,0,0A8.47,8.47,0,0,1,7,12.71,8.88,8.88,0,0,1,16,4m0-2A10.86,10.86,0,0,0,5,12.71a10.53,10.53,0,0,0,2.2,6.43L16,32l8.8-12.86A10.53,10.53,0,0,0,27,12.71,10.86,10.86,0,0,0,16,2Z'>
      </Path>
    </Svg>
  );
};

export const AnalyticsIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg
      fill="currentColor"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      aria-hidden="true"
      {...props}
    >
      <Path d="M24 21h2v5h-2zm-4-5h2v10h-2zm-9 10a5.006 5.006 0 01-5-5h2a3 3 0 103-3v-2a5 5 0 010 10z" />
      <Path d="M28 2H4a2.002 2.002 0 00-2 2v24a2.002 2.002 0 002 2h24a2.003 2.003 0 002-2V4a2.002 2.002 0 00-2-2zm0 9H14V4h14zM12 4v7H4V4zM4 28V13h24l.002 15z" />
    </Svg>
  );
};

export const DetailsIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg
      fill="currentColor"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      aria-hidden="true"
      {...props}
    >
      <Path d="M30.94 15.66A16.69 16.69 0 0016 5 16.69 16.69 0 001.06 15.66a1 1 0 000 .68A16.69 16.69 0 0016 27a16.69 16.69 0 0014.94-10.66 1 1 0 000-.68zM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25z" />
      <Path d="M16 10a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z" />
    </Svg>
  );
};

export const FridgeIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg
      fill="currentColor"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      aria-hidden="true"
      {...props}
    >
      <Path d="M13 30a5.006 5.006 0 01-5-5h2a3 3 0 103-3H4v-2h9a5 5 0 010 10z" />
      <Path d="M25 25a5.006 5.006 0 01-5-5h2a3 3 0 103-3H2v-2h23a5 5 0 010 10zm-4-13H6v-2h15a3 3 0 10-3-3h-2a5 5 0 115 5z" />
    </Svg>
  );
};

export const CommunityIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg
      fill="currentColor"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      aria-hidden="true"
      {...props}
    >
      <Path d="M26 14h-2v2h2a3.003 3.003 0 013 3v4h2v-4a5.006 5.006 0 00-5-5zM24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5 5 5 0 00-5-5zm-1 28h-2v-2a3.003 3.003 0 00-3-3h-4a3.003 3.003 0 00-3 3v2H9v-2a5.006 5.006 0 015-5h4a5.006 5.006 0 015 5zm-7-17a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5 5 5 0 00-5-5zm-8 3H6a5.006 5.006 0 00-5 5v4h2v-4a3.003 3.003 0 013-3h2zM8 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5 5 5 0 00-5-5z" />
    </Svg>
  );
};
