import React from 'react';
import styles from './dialogs.module.css';
import {Link} from "react-router-dom";

const Dialogs_Item = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <Link to={path}><li className={styles}>{props.name}</li></Link>
    )
}

const Dialogs_Messege = (props) =>{
    return (
        <div className={styles.text}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsList}>
                <ul>
                    <Dialogs_Item name="Dima" id={1}/>
                    <Dialogs_Item name="Serbkbol" id={2}/>
                    <Dialogs_Item name="Chingiz" id={3}/>
                    <Dialogs_Item name="Miras" id={4}/>
                    <Dialogs_Item name="Egor" id={5}/>
                </ul>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    <div className={styles.avatar}></div>
                    <Dialogs_Messege message="hi"/>
                </div>
                <div className={`${styles.message} ${styles.me}`}>
                    <div className={styles.avatar}></div>
                    <Dialogs_Messege message="hi)"/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
