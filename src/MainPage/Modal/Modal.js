import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
    const { isTheTop } = props;

    let boxStyles = [styles.box];

    if (isTheTop) {
        boxStyles.push(styles.topBox);
    } else {
        boxStyles.push(styles.bottomBox);
    }

    return (
        <div className={styles.wrapper}>
            <div className={ boxStyles.join(' ') }>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;