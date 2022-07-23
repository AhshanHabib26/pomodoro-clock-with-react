import React from "react";
import Styles from '../Footer/Footer.module.css'

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <div>
      <p className={Styles.inner_footer}>
        Copyright © 2021 - {getYear} | All Right Reserved by{" "}
        <a
          href="https://github.com/AhshanHabib26"
        >
          Ahshan Habib.
        </a>
      </p>
    </div>
  );
};

export default Footer;
