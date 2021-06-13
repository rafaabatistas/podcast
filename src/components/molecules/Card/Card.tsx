import styles from './styles.module.scss';

import Image from 'next/image';
import React from 'react';

import { ButtonPlayGreen } from '../../atoms/ButtonPlayGreen/ButtonPlayGreen';

type CarProps = {
  thumbnail: string;
  title: string;
  children: React.ReactNode;
};

export const Card = ({ thumbnail, title, children }: CarProps) => {
  return (
    <article className={styles.heading}>
      <Image
        width={192}
        height={192}
        src={thumbnail}
        alt={title}
        objectFit="cover"
      />
      {children}
      <ButtonPlayGreen />
    </article>
  );
};
