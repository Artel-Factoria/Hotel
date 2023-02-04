import React from 'react';
import styles from './Header.module.scss';
import face from '../../assets/img/logo.webp'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Hotel
      </div>
      <div className={styles["header__sign-in"]}>
        <div className={styles["header__sign-in-button"]}>
          <img src={face} alt="" className={styles["header__sign-in-logo"]} />
          <p className={styles["header__sign-in-text"]}>
            Войти
          </p>
        </div>
        <section className={styles["header__sign-in-links"]}>
          <a href="#" className={styles["header__sign-in-sign-in"]}>Войти</a>
          <a href="#" className={styles["header__sign-in-sign-up"]}>Зарегистрироватся</a>
        </section>
      </div>
    </header>
  );
}

export default Header;
