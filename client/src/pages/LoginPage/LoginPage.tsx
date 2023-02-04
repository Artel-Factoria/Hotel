import React from 'react';
import styles from './LoginPage.module.scss';

function LoginPage() {
  return (
    <div className={styles["login"]}>
    <section className={styles["login__table"]}>
      <h2>Войти</h2>
      <form action="" method="get">
        <div className={styles["login__table-number"]}>
          <input type="text" placeholder="Номер телефона" />
        </div>
        <div className={styles["login__table-password"]}>
          <input type="text" placeholder="Пароль" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </section>
  </div>
  );
}

export default LoginPage;
