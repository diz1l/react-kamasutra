import React from 'react';
import styles from './dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsList}>
                <ul>
                    <li>Andrew</li>
                    <li className={styles.active}>Dmitry</li>
                    <li>Sasha</li>
                    <li>Sveta</li>
                    <li>Valera</li>
                    <li>Viktor</li>
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
