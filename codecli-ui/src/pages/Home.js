import React, { useRef } from "react";
import MainInput from "../components/MainInput";
import styles from "./Home.module.css";

function Home() {
    // Reset input if needed when navigating back to Home
    const inputRef = useRef(null);

    return (
        <div className={styles.homeContainer}>
            <div className={styles.brandSmall}>codecli</div>
            <MainInput inputRef={inputRef} />
        </div>
    );
}

export default Home;
