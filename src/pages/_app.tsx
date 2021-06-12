import '../styles/global.scss';

import { Header } from '../components/organisms/Header/Header';
import { Player } from '../components/organisms/Player/Player';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <head>
      <title>Podcastr</title>
      </head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
    )
}

export default MyApp
