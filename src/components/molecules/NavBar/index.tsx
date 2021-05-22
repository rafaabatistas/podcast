import { Logotipo } from "../../atoms/Logotipo";
import { NavItem } from "../../atoms/NavItem";
import { Date } from "../../atoms/Date";


export function NavBar() {
  return (
    <>
      <Logotipo />
      <NavItem>O melhor para você ouvir, sempre</NavItem>
      <Date />
    </>
  )
}
