import React from 'react';
import { Link } from 'react-router-dom';

import styles from './startPage.module.css';
import Footer from './Footer';
import StartPage from './StartPage';
import {
    CustomField,
    PasswordField,
    CustomButton
} from '../common/';

const signIn = () => {
    return (
        <StartPage>
            <div className={styles.loginForm}>
                <div className={styles.title}>Sign In</div>

                <div className={styles.fields}>
                    <CustomField type='email' placeholder='E-mail' />
                    <PasswordField placeholder='Password' />
                </div>

                <Link className={styles.link} to='/password/forget'>
                    Forgot password?
                </Link>

                <CustomButton title='Sign In' />

                <Link className={styles.link} to='/signup'>
                    Sign Up
                </Link>
            </div>

            <Footer />
        </StartPage>
    );
}

export default signIn;