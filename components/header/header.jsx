import Link from "next/link";
import logoImg from '@/assets/logo.png';
import style from './header.module.css';
import Image from "next/image";
import HeaderBackground from "./header-background/header-background";
import { NavLink } from "./nav-link/nav-link";

const MainHeader = () => {
    return <>
        <HeaderBackground></HeaderBackground>
        <header className={style.header}>
            <Link className={style.logo} href="/">
                <Image src={logoImg} alt="A place with food on it" priority />
                Next Level Food
            </Link>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodie Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
};

export default MainHeader;