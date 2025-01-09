import React from 'react';
import styles from './main_info.module.css';
import Posts from "./MyPosts/Posts";
import Profile_info from "./ProfileInfo/Profile_info";

const MainInfo = () => {

    let messegeData2 = [
        {id: 1, message: 'ЧТО С ТЕНГЕ ПРОИСХОДИТ !?', likeCount: 2},
        {id: 2, message: 'ХЗ', likeCount: 20},
    ];

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
            <Posts message={messegeData2[0].message} likeCount={messegeData2[0].likeCount}/>
            <Posts message={messegeData2[1].message} likeCount={messegeData2[1].likeCount}/>

        </div>
    );
};

export default MainInfo;
