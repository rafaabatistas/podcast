import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export const DateItem = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
});

  return <span className={styles.currentDate}>{ currentDate }</span>
}
