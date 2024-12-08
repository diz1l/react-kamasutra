import React from 'react';
import styles from "./main_info.module.css";
import Posts from "./MyPosts/Post/Posts";

const MainInfo = () => {
    return (
        <div className={styles.appContent}>
            <div className={styles.appContentBody}>
                {/* Header Section */}
                <div className={styles.appContentHeader}>
                    <img
                        src="https://www.akorda.kz/assets/media/flag.jpg"
                        alt="Flag of Kazakhstan"
                    />
                </div>

                {/* Logo Section */}
                <div className={styles.contentLogo}>
                    <img
                        src="https://static.tiktokemoji.com/202410/31/lZ6VRm53.webp"
                        alt="Kazakhstan Logo"
                    />
                </div>

                {/* Content Section */}
                <div className={styles.contentName}>
                    Казахстан
                </div>
                <div className={styles.contentDescription}>
                    Казахстан — девятая по величине страна в мире, известная своими степями,
                    горами и богатой культурой.
                </div>
                <div className={styles.contentTitle}>
                    Оставьте ваш отзыв о Казахстане:
                </div>

                {/* Input Section */}
                <input
                    className={styles.contentInput}
                    type="text"
                    placeholder="Напишите, что вам понравилось в Казахстане"
                />

                {/* Button Section */}
                <div className={styles.contentButton}>
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </div>
            </div>

            {/* Posts Section */}
            <Posts />
        </div>
    );
};

export default MainInfo;
