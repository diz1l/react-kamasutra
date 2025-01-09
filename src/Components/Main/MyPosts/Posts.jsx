import React from 'react';
import s from "./posts.module.css";

const Posts = (props) => {
    return (
        <div className={s.postsContentBody}>
            <div className={s.contentComentLogo}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6211/6211443.png"
                    alt="logo3"/>
            </div>
            <div className={s.contentComentText}>
                {props.message}
            </div>
            <div className={s.contentComentLike}>
                Likes: {props.likeCount}
            </div>
        </div>
    );
};

export default Posts;
