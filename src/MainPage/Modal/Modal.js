import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;