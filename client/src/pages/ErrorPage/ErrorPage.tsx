import React from 'react';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={styles["error-text"]}>
      404 error 
      <br />
      Page not found
    </div>
  );
}

export default ErrorPage;
