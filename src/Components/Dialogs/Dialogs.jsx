import React from 'react';
import styles from './dialogs.module.css';
import { Link } from "react-router-dom";

const DialogItem = ({ id, name }) => {
    const path = `/dialogs/${id}`;
    return (
        <Link to={path}>
            <li className={styles.dialogItem}>{name}</li>
        </Link>
    );
};

const Message = ({ message, isMe }) => {
    return (
        <div className={`${styles.message} ${isMe ? styles.me : ""}`}>
            <div className={styles.avatar}>{isMe ? "Me" : "A"}</div>
            <div className={styles.text}>{message}</div>
        </div>
    );
};

const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Serbkbol' },
        { id: 3, name: 'Chingiz' },
        { id: 4, name: 'Miras' },
        { id: 5, name: 'Egor' },
    ];

    const messagesData = [
        { id: 1, message: 'Q', isMe: false },
        { id: 2, message: 'Q', isMe: true },
        { id: 3, message: 'cho tam', isMe: false },
        { id: 4, message: 'a cho', isMe: true },
        { id: 5, message: 'a ni cho na, narmlno obshaysa', isMe: false },
    ];

    const dialogsElements = dialogsData.map(dialog => (
        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
    ));

    const messagesElements = messagesData.map(msg => (
        <Message key={msg.id} message={msg.message} isMe={msg.isMe} />
    ));

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsList}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
