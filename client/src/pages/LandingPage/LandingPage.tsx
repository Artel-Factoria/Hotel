import React from 'react';
import styles from './LandingPage.module.scss';

function LandingPage() {
  return (
    <div className={styles["landing-page"]}>
      <section className={styles["landing-page__search-table"]}>
        <h2>Найдём номера под ваши пожелания</h2>
        <form action="" method="get">
          <div className={styles["landing-page__search-table-date"]}>
            <div className={styles["landing-page__search-table-arrival"]}>
              <p>Прибытие</p>
              <input className={styles["landing-page__search-table-date-input"]} type="text" placeholder="ДД.ММ.ГГГГ" />
            </div>
            <div className={styles["landing-page__search-table-departure"]}>
              <p>Выезд</p>
              <input className={styles["landing-page__search-table-departure-input"]} type="text" placeholder="ДД.ММ.ГГГГ" />
            </div>
          </div>
          <div className={styles["landing-page__search-table-guest"]}>
            <p>Гости</p>
            <input type="text" placeholder="Сколько гостей" />
          </div>
          <a href="./pages/search.html">ПОДОБРАТЬ НОМЕР</a>
        </form>
      </section>
    </div>
  );
}

export default LandingPage;
