import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";
import Logo from "@/public/logo.png";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "./nav-link";
export default function MealsHeader() {
  return (
    <header className={classes.header}>
      <MainHeaderBackground />
      <Link href={"/"} className={classes.logo}>
        <Image key={"logo"} alt="logo" src={Logo} priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink path='/meals' text='Browse Meals'/>
          </li>
          <li>
            <NavLink path='/community' text='Foodies Community'/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
