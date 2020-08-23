import React from 'react';
import { useHistory } from 'react-router-dom';

import StartPage from './StartPage';
import baseStyles from './startPage.module.css';
import styles from './forgetPassword.module.css';
import {
    CustomField,
    PasswordField,
    CustomButton
} from '../common/';

const EditPassword = props => {
    const text = 'Reset code was sent to your Email. Please enter the code and create new password';
    let history = useHistory();

    const changeHandler = () => {
        history.push('/');
    }

    return (
        <StartPage>
            <div className={baseStyles.loginForm}>
                <div className={baseStyles.title}>Forgot Password</div>
                <div className={styles.info}>
                    { text }
                </div>

                <div className={styles.fields}>
                    <CustomField type='text' placeholder='Code' />
                    <PasswordField placeholder='Password' />
                    <PasswordField placeholder='Confirm password' />
                </div>

                <CustomButton title='Change Password' click={changeHandler} />
            </div>
        </StartPage>
    );
}

export default EditPassword;