import styles from './styles.module.scss';

import type { Episode } from '../../../types/Episode';

import Link from 'next/link';

export const DescriptionLatestEpisode = ({id, title, members, publishedAt, durationAsString}: Episode) => {
  return (
    <div className={styles.card_details}>
      <Link href={`/episodes/${id}`}>
        <a className={styles.title}>{title}</a>
      </Link>
      <p className={styles.members}>{members}</p>
      <span>{publishedAt}</span>
      <span>{durationAsString}</span>
    </div>
  );
};
