import styles from './styles.module.scss';

import { NavBar } from '../../molecules/NavBar/NavBar';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <NavBar />
    </header>
  );
};
