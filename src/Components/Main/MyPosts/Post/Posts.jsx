import React from 'react';
import s from "./posts.module.css";

const Posts = () => {
    return (
        <div className={s.postsContentBody}>
            <div className={s.contentComentLogo}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6211/6211443.png"
                    alt="logo3"
                />
            </div>
            <div className={s.contentComentText}>
                ЧТО С ТЕНГЕ ПРОИСХОДИТ !?
            </div>
        </div>
    );
};

export default Posts;
