import styles from './styles.module.scss';

import Link from 'next/link';

export const Logotipo = () => {
  return (
    <Link href="/">
      <img src="/logo.svg" alt="Logotipo" className={styles.Logo} />
    </Link>
  )  
}
