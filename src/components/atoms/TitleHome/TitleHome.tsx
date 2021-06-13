import styles from './styles.module.scss';

type TitleHomeProps = {
  children: React.ReactNode;
};

export const TitleHome = ({ children }: TitleHomeProps) => {
  return <h2 className={styles.headerTitle}>{children}</h2>;
};
