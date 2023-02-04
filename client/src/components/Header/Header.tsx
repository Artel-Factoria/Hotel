import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import styles from './Header.module.scss';
import face from '../../assets/img/logo.webp'
import LandingPage from '../../pages/LandingPage/LandingPage';
import Register from '../../pages/Register/Register';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to='/' className={styles.logo}>
          Hotel
        </Link>
        <div className={styles["header__sign-in"]}>
          <div className={styles["header__sign-in-button"]}>
            <img src={face} alt="" className={styles["header__sign-in-logo"]} />
            <p className={styles["header__sign-in-text"]}>
              Войти
            </p>
          </div>
          <section className={styles["header__sign-in-links"]}>
            <Link to="/login" className={styles["header__sign-in-sign-in"]}>Войти</Link>
            <Link to="/register" className={styles["header__sign-in-sign-up"]}>Зарегистрироватся</Link>
          </section>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Header;
