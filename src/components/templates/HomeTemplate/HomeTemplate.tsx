import styles from './styles.module.scss';

import { LatestEpisode } from '../../organisms/LatestEpisode/LatestEpisode';
import { AllEpisode } from '../../organisms/AllEpisode/AllEpisode';

export const HomeTemplate = () => {
  return (
    <section className={styles.home_template}>
      <LatestEpisode />
      <AllEpisode />
    </section>
  )
}
