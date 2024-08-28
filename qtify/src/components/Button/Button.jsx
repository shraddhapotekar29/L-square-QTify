import React from "react";
import styles from "./Button.module.css";
const Button=({children,variant})=>{
    return(<button className={styles.poppins} variant={variant}>{children}</button>)
}

export default Button;