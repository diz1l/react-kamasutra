import React from 'react';
import styles from "./main_info.module.css";

const MainInfo = () => {
    return (
        <div className={styles.appContent}>
            <div className={styles.appContentBody}>
                <div className={styles.appContentHeader}>
                    <img src="https://www.akorda.kz/assets/media/flag.jpg" alt="logo"/>
                </div>
                <div className={styles.contentLogo}>
                    <img src="https://static.tiktokemoji.com/202410/31/lZ6VRm53.webp" alt="logo2"/>
                </div>
                <div className={styles.contentName}>Казахстан</div>
                <div className={styles.contentDescription}>
                    Казахстан — девятая по величине страна в мире, известная своими степями, горами и богатой культурой.
                </div>
                <div className={styles.contentTitle}>
                    Оставьте ваш отзыв о Казахстане:
                </div>
                <input
                    className={styles.contentInput}
                    type="text"
                    placeholder="Напишите, что вам понравилось в Казахстане"
                />
                <div className={styles.contentButton}>
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </div>
                <div className={styles.contentComentLogo}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6211/6211443.png"
                        alt="logo3"
                    />
                </div>
                <div className={styles.contentComentText}>
                    ЧТО С ТЕНГЕ ПРОИСХОДИТ !?
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
