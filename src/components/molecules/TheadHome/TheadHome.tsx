import styles from './styles.module.scss';

export const TheadHome = () => {
  return (
    <thead className={styles.column_table}>
      <tr>
        <th></th>
        <th>Podcast</th>
        <th>Integrantes</th>
        <th>Data</th>
        <th>Duração</th>
        <th></th>
      </tr>
    </thead>
  );
};
