import styles from './styles.module.scss';

import { useContext } from 'react';
import { DescriptionLatestEpisode } from '../../atoms/DescriptionLatestEpisode/DescriptionLatestEpisode';
import { TitleHome } from '../../atoms/TitleHome/TitleHome';
import { Card } from '../../molecules/Card/Card';
import { LatestEpisodeContext } from '../../../contexts/LatestEpisodeContext';

export const LatestEpisode = () => {
  const { latestEpisodeList } = useContext(LatestEpisodeContext);

  return (
    <>
      <TitleHome>Últimos Laçamentos</TitleHome>
      <section className={styles.card}>
        {latestEpisodeList.map(episode => {
          return (
            <Card thumbnail={episode.thumbnail} title={episode.title}>
              <DescriptionLatestEpisode
                id={episode.id}
                title={episode.title}
                members={episode.members}
                publishedAt={episode.publishedAt}
                durationAsString={episode.durationAsString}
              />
            </Card>
          );
        })}
      </section>
    </>
  );
};
