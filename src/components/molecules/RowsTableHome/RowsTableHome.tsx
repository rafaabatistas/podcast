import styles from './styles.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { ButtonPlayGreen } from '../../atoms/ButtonPlayGreen/ButtonPlayGreen';

import type { Episode } from '../../../types/Episode';
export const RowsTableHome = ({
  id,
  thumbnail,
  title,
  members,
  publishedAt,
  durationAsString,
}: Episode) => {
  return (
    <tr className={styles.episode_details} key={id}>
      <td>
        <Image
          width={120}
          height={120}
          src={thumbnail}
          alt={title}
          objectFit="cover"
          className={styles.image}
        />
      </td>
      <td>
        <Link href={`/episodes/${id}`}>
          <a className={styles.title}>{title}</a>
        </Link>
      </td>
      <td className={styles.memberEpisode}>{members}</td>
      <td className={styles.dataEpisode}>{publishedAt}</td>
      <td>{durationAsString}</td>
      <td>
        <ButtonPlayGreen />
      </td>
    </tr>
  );
};
