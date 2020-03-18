import React, { memo } from 'react';

import { iconsByName } from './iconsByName';

export type IconNames = keyof typeof iconsByName;

export interface IIconProps {
  name: IconNames;
  color: string;
  customColor?: string;
  size?: 'small' | 'medium' | 'large';
  customSize?: string;
  className?: string;
}

const DEFAULT_SIZE = 'small';

const pxDimensionsBySize = {
  small: '24px',
  medium: '34px',
  large: '40px',
};

export const Icon = memo(({ name, color, customColor, size, customSize, className }: IIconProps) => {
  const Component = iconsByName[name];

  const width = customSize ?? pxDimensionsBySize[size || DEFAULT_SIZE];
  const fill = customColor ?? `var(--color-${color})`;

  return <Component className={className} style={{ width, fill }} />;
});
