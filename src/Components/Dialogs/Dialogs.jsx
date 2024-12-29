import React from 'react';
import styles from './dialogs.module.css';
import {Link} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsList}>
                <ul>
                    <Link to="/dialogs/1"><li>Andrew</li></Link>
                    <Link to="/dialogs/2"><li className={styles.active}>Dmitry</li></Link>
                    <Link to="/dialogs/3"><li>Sasha</li></Link>
                    <Link to="/dialogs/4"><li>Sveta</li></Link>
                    <Link to="/dialogs/5"><li>Valera</li></Link>
                    <Link to="/dialogs/6"><li>Viktor</li></Link>
                </ul>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    <div className={styles.avatar}></div>
                    <div className={styles.text}>
                        Как ты ?
                    </div>
                </div>
                <div className={`${styles.message} ${styles.me}`}>
                    <div className={styles.avatar}></div>
                    <div className={styles.text}>
                        I am a normal
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
