import React from 'react';
import styles from "./profile_info.module.css";

const Profile_info = () => {
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

            </div>
        </div>
    );
};

export default Profile_info;
