'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import style from './nav-link.module.css';

export const NavLink = ({ href, children }) => {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ?
            `${style.active} ${style.link}`
            : style.link}>
            {children}
        </Link>
    )
}