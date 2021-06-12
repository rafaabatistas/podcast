import styles from './styles.module.scss';

type NavItemProp = {
  children: React.ReactNode;
}

export const NavItem = ({children}: NavItemProp) => {
  return <p className={styles.navItem}>{children}</p>
 }
