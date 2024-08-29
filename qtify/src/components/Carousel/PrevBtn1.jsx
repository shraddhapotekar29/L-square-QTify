import React from "react";
import { ReactComponent as LeftNavigation } from "../../assets/LeftNavigation.svg";
import styles from "./PrevBtn.module.css";
const PrevBtn = ({ swiperRef }) => {
  return (
    <div className={styles.prev}>
      <LeftNavigation onClick={() => swiperRef.current?.slidePrev()} />
    </div>
  );
};

export default PrevBtn;
