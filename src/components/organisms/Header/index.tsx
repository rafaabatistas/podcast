import { NavBar } from '../../molecules/NavBar';

import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
          <NavBar />            
        </header>
    )
}
