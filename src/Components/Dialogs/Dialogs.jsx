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

    let dialogsData = [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Serbkbol'},
            {id: 3, name: 'Chingiz'},
            {id: 4, name: 'Miras'},
            {id: 5, name: 'Egor'},
        ];

    let messegeData = [
        {id: 1, message: 'Q'},
        {id: 2, message: 'Q'},
        {id: 3, message: 'cho tam'},
        {id: 4, message: 'a cho'},
        {id: 5, message: 'a ni cho na, narmlno obshaysa'},
    ];

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsList}>
                <ul>
                    <Dialogs_Item name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <Dialogs_Item name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <Dialogs_Item name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <Dialogs_Item name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <Dialogs_Item name={dialogsData[4].name} id={dialogsData[4].id}/>
                </ul>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    <div className={styles.avatar}></div>
                    <Dialogs_Messege message={messegeData[0].message}/>
                </div>
                <div className={`${styles.message} ${styles.me}`}>
                    <div className={styles.avatar}></div>
                    <Dialogs_Messege message={messegeData[1].message}/>
                </div>
                <div className={styles.message}>
                    <div className={styles.avatar}></div>
                    <Dialogs_Messege message={messegeData[2].message}/>
                </div>
                <div className={`${styles.message} ${styles.me}`}>
                    <div className={styles.avatar}></div>
                    <Dialogs_Messege message={messegeData[3].message}/>
                </div>
                <div className={styles.message}>
                    <div className={styles.avatar}></div>
                    <Dialogs_Messege message={messegeData[4].message}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
