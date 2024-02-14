import styles from "./App.module.css";
import firstGif from "./gifs/output-onlinegiftools (1).gif";
import {useState} from "react";
import secondPage from "./secondPage.jsx";
import SecondPage from "./secondPage.jsx";

const FirstPage = () => {
    const [position, setPosition] = useState(true)
    const [page, setPage] = useState(true)
    const [counter, setCounter] = useState(0)
    const yesButton = <div onClick={() => setPage(!page)} className={styles.yes}>Так</div>
    const noButton = <div onClick={() => {
        setCounter(counter + 1);
        setPosition(!position)
    }} className={styles.no}>Ні</div>
    return page ? <>
        <div className={styles.gifWrapper}>
            <img className={styles.firstGif} src={firstGif} alt=""/>
        </div>
        <div className={styles.label}>Будеш моєю валентинкою?
            <div className={styles.choice}>
                {counter > 6 ? <>{yesButton}{yesButton}</> : (position ?
                    <>{yesButton}{noButton}</> : <>{noButton}{yesButton}</>)}
            </div>
        </div>
    </> : <SecondPage/>
}

export default FirstPage