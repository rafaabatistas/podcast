import styles from './styles.module.scss';

import type { Episode } from '../../../types/Episode';

import Image from 'next/image';
import Link from 'next/link';

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
        <button type="button" className={styles.play_button}>
          <img src="/play-green.svg" alt="Tocar Episodio" />
        </button>
      </td>
    </tr>
  );
};
