import React from 'react';
import styles from './main_info.module.css';
import Posts from "./MyPosts/Posts";
import Profile_info from "./ProfileInfo/Profile_info";

const MainInfo = () => {
    return (
        <div className={styles.appContent}>
            <div className={styles.appContentBody}>

                <Profile_info/>

                <div className={styles.contentText}>
                    Оставьте ваш отзыв о Казахстане:
                </div>
                {/* Input Section */}

                <div className={styles.contentInput}>
                    <input
                        className={styles.contentInputInput}
                        type="text"
                        placeholder="Напишите, что вам понравилось в Казахстане"
                    />
                </div>


                {/* Button Section */}
                <div className={styles.contentButton}>
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </div>
            </div>

            {/* Posts Section */}
            <Posts message="ЧТО С ТЕНГЕ ПРОИСХОДИТ !?"/>
            <Posts message="ХЗ"/>

        </div>
    );
};

export default MainInfo;
