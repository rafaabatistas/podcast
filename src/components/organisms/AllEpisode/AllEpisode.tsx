import styles from './styles.module.scss';

import { useContext } from 'react';
import { TitleHome } from '../../atoms/TitleHome/TitleHome';
import { TheadHome } from '../../molecules/TheadHome/TheadHome';
import { RowsTableHome } from '../../molecules/RowsTableHome/RowsTableHome';
import { AllEpisodeContext } from '../../../contexts/AllEpisodeContext';

export const AllEpisode = () => {
  const { allEpisodeList } = useContext(AllEpisodeContext);

  return (
    <section className={styles.table_details_episodes}>
      <TitleHome>Todos episódios</TitleHome>
      <table cellSpacing={0} className={styles.table_details}>
        <TheadHome />
        <tbody>
          {allEpisodeList.map(episode => {
            return (
              <RowsTableHome
                key={episode.id}
                id={episode.id}
                thumbnail={episode.thumbnail}
                title={episode.title}
                members={episode.members}
                publishedAt={episode.publishedAt}
                durationAsString={episode.durationAsString}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
