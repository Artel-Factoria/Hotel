import React from 'react';
import styles from './Register.module.scss';

function Register() {
  return (
    <div className={styles["register"]}>
      <section className={styles["register__table"]}>
        <h2>Регистрация аккаунта</h2>
        <form action="" method="get">
          <input type="text" placeholder="Имя" className={styles["register__table-name"]} />
          <input type="text" placeholder="Фамилия" className={styles["register__table-firstname"]} />
          <div className={styles["register__table-radio-button-list"]}>
            <label className={styles["register__table-label"]}>
              <input type="radio" name="register__table-radio-button" value="male" className={styles["register__table__radio-button"]} />
              <span className={styles["register__table-radio-text"]}>Мужчина</span>
            </label>
            <label className={styles["register__table-label"]}>
              <input type="radio" name="register__table-radio-button" value="female" className={styles["register__table-radio-button"]} />
              <span className={styles["register__table-radio-text"]}>Женщина</span>
            </label>
          </div>
          <div className={styles["register__table-password"]}>
            <p>Дата рождения</p>
            <input type="text" placeholder="ДД.ММ.ГГГГ" />
          </div>
          <div className={styles["register__table-data"]}>
            <p>Данные для входа в сервис</p>
            <input type="text" placeholder="Номер телефона" className={styles["register__table-name"]} />
            <input type="text" placeholder="Пароль" className={styles["register__table-firstname"]} />
          </div>
          <button type="submit">Зарегистрироватся</button>
        </form>
      </section>
    </div>
  );
}

export default Register;
