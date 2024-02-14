import styles from "./App.module.css";
import secondGif from "./gifs/output-onlinegiftools.gif";
import {useState} from "react";

const SecondPage = () => {
    return <>
        <div className={styles.secondGifWrapper}>
            <img className={styles.secondGif} src={secondGif} alt=""/>
        </div>
        <div className={styles.secondLabel}> Я так і знав</div>
    </>
}

export default SecondPage