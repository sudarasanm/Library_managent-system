import { Children } from "react";
import styles from "./popup.module.css"

export default function  Popup(props){
    return <div className={styles.main}>
        <div className={styles.backdrop} onClick={props.onClick}/>
        <div className={styles.content}>{props.children}<button className={styles.btn} onClick={props.onClick}>OK</button></div>
        
    </div>
}