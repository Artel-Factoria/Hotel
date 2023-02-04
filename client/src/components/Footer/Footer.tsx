import React from 'react';
import styles from './Footer.module.scss';
import vk from '../../assets/img/vk.webp'
import tg from '../../assets/img/tg.webp'
import github from '../../assets/img/github.webp'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__copyrigth"]}>2023 WhoStoleMySleep ©</div>
      <div className={styles["footer__social"]}>
        <a href="#" className={styles["footer__social-link"]}>
          <img src={vk} alt="" className={styles["footer__social-img"]} />
        </a>
        <a href="#" className={styles["footer__social-link"]}>
          <img src={tg} alt="" className={styles["footer__social-img"]} />
        </a>
        <a href="#" className={styles["footer__social-link"]}>
          <img src={github} alt="" className={styles["footer__social-img"]} />
        </a>
      </div>
  </footer>
  );
}

export default Footer;
