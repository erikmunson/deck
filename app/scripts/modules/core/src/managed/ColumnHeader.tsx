import React from 'react';

import { Icon, IconNames } from '../presentation';

import styles from './ColumnHeader.module.css';

export interface IColumnHeaderProps {
  text: string;
  icon: IconNames;
}

export function ColumnHeader({ text, icon }: IColumnHeaderProps) {
  return (
    <div className={styles.ColumnHeader}>
      {icon && <Icon name={icon} color="white" className={styles.icon} />}
      {text && (
        <span className={styles.text} style={icon && { marginRight: '56px' }}>
          {text}
        </span>
      )}
    </div>
  );
}
