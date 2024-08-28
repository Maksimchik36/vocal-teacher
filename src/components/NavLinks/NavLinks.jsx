"use client";
import { navLinksData } from "@/data/navLinksData";
import Link from "next/link";
import styles from "./NavLinks.module.scss";


const NavLinks = ({ className, setIsClicked }) => {
    return (
        <nav className={`${styles.navLinks} ${className}`}>
            {navLinksData.map((item) => {
                return (
                    <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => {
                            setIsClicked(false);
                        }}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
};


export default NavLinks;