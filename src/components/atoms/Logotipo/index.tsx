import Link from 'next/link';

import styles from './styles.module.scss';

export function Logotipo() {
  return (
    <Link href="/">
      <img src="/logo.svg" alt="Logotipo" className={styles.Logo} />
    </Link>
  )  
}
