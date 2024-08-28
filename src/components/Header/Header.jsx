"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import ContactLinks from "../ContactLinks/ContactLinks";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";


const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const burgerBtn = useRef(null);
  const closeBtn = useRef(null);
  const mobileMenuContainer = useRef(null);

  const isBrowser = typeof window !== "undefined";

  const closeBurgerOnLinkClick = (e) => {
    if (
      e.target === burgerBtn.current ||
      e.target === closeBtn.current ||
      e.target === mobileMenuContainer.current
    ) {
      return;
    } else {
      setIsClicked(false);
    }
  };

  const setLaptopHeader = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsClicked(false);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", closeBurgerOnLinkClick);
    window.addEventListener("resize", setLaptopHeader);
  }, [setLaptopHeader]);

  return (
    <header className={styles.header}>
      <div
        className={
          isClicked
            ? `container ${styles.container} ${styles.mobileMenuContainer}`
            : `container ${styles.container}`
        }
        ref={mobileMenuContainer}
      >
        <BurgerBtn
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          onClick={(e) => {
            e.stopPropagation();
            setIsClicked(!isClicked);
          }}
          className={styles.burgerBtn}
          burgerBtn={burgerBtn}
          closeBtn={closeBtn}
        />

        <NavLinks
          className={
            isClicked
              ? `${styles.navLinks} ${styles.navLinksMobileVisible}`
              : `${styles.navLinks}`
          }
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <ContactLinks id={styles.contactLinks} />

        <ButtonLink
          href="tel:+380505361693"
          title="Подзвонити"
          className={styles.btn}
        />
      </div>
    </header>
  );
};


export default Header;