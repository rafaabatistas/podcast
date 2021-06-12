import { Logotipo } from '../../atoms/Logotipo/Logotipo';
import { NavItem } from '../../atoms/NavItem/NavItem';
import { DateItem } from '../../atoms/DateItem/DateItem';

export const NavBar = () => {
  return (
    <>
      <Logotipo />
      <NavItem>O melhor para você ouvir, sempre</NavItem>
      <DateItem />
    </>
  );
}
