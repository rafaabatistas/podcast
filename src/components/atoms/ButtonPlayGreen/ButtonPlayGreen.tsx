import styles from './styles.module.scss';

export const ButtonPlayGreen = () => {
  return (
    <button type="button" className={styles.play_button}>
      <img src="/play-green.svg" alt="Tocar Episodio" />
    </button>
  );
};
