import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './ChangePasswordPage.module.css';
import logo from '../../assets/logo.svg'
import { PasswordField } from '../../common';
import BlueButton from '../../common/BlueButton/BlueButton';
import ThreeDotMenu from '../ThreeDotMenu/ThreeDotMenu';

const ChangePasswordPage = () => {
    const history = useHistory();

    const buttonClickHandle = () => {
        history.push('/');
    }

    return (
        <div className={styles.wrapper}>
        <div className={styles.leftSide}>
            <div className={styles.leftInside}>
                <img src={logo} alt='JustDo' />
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.content}>
                <div className={styles.title}>Change Password</div>

                <div className={styles.form}>
                    <PasswordField placeholder='Password' />
                    <PasswordField placeholder='New password' />
                    <PasswordField placeholder='Confirm password' />
                </div>

                <div className={styles.buttonWrapper}>
                    <BlueButton title='Change Password' click={buttonClickHandle} />
                </div>
            </div>
        </div>

        <ThreeDotMenu />
    </div>
    );
}

export default ChangePasswordPage;