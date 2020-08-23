import React from 'react';
import { useHistory } from 'react-router-dom';

import StartPage from './StartPage';
import baseStyles from './startPage.module.css';
import styles from './forgetPassword.module.css';
import {
    CustomField,
    CustomButton
} from '../common/';

const ForgetPassword = props => {
    const text = 'Please enter your email bellow to receive your password reset instruction';
    let history = useHistory();

    const sendHandler = () => {
        history.push('/password/edit');
    }

    return (
        <StartPage>
            <div className={baseStyles.loginForm}>
                <div className={baseStyles.title}>Forgot Password</div>
                <div className={styles.info}>
                    { text }
                </div>

                <div className={styles.fields}>
                    <CustomField type='email' placeholder='E-mail' />
                </div>

                <CustomButton title='Send' click={sendHandler} />
            </div>
        </StartPage>
    );
}

export default ForgetPassword;