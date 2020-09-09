import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './ModalMenu.module.css';

const ModalMenu = () => {

    const history = useHistory();

    const changePassHandle = () => {
        history.push('/main/password');
    }

    const signOutHandle = () => {
        history.push('/');
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.item} onClick={changePassHandle}>
                    Change password
                </div>
                <div className={styles.item} onClick={signOutHandle}>
                    Sign out
                </div>
            </div>
        </div>
    );
}

export default ModalMenu;