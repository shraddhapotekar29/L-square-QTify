import React from "react";
import { ReactComponent as RightNavigation } from "../../assets/RightNavigation.svg";
import styles from "./Next.module.css";
const NextBtn = ({ swiperRef }) => {
  return (
    <div className={styles.next}>
      <RightNavigation onClick={() => swiperRef.current?.slideNext()} />
    </div>
  );
};

export default NextBtn;
