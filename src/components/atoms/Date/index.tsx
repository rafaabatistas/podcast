import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Date() {
  const currentDate = 'Sab, 22 de Maio';

  return <span className={styles.currentDate}>{ currentDate }</span>
}
