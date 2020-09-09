import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './startPage.module.css';
import Footer from './Footer';
import StartPage from './StartPage';
import CircleSpinner from '../common/CircleSpinner/CircleSpinner';
import {
    CustomField,
    PasswordField,
    CustomButton
} from '../common/';

const SignIn = () => {
    const [isLoad, setIsLoad] = useState(false);
    const history = useHistory();

    const handleClick = () => {
        setIsLoad(true);

        setTimeout(() => {
            setIsLoad(false);
            history.push('/main');
        }, 1000);
    }

    return (
        <StartPage>
            {isLoad && <CircleSpinner />}

            <div className={styles.loginForm}>
                <div className={styles.title}>Sign In</div>

                <div className={styles.fields}>
                    <CustomField type='email' placeholder='E-mail' />
                    <PasswordField placeholder='Password' />
                </div>

                <Link className={styles.link} to='/password/forget'>
                    Forgot password?
                </Link>

                <CustomButton title='Sign In' click={handleClick} />

                <Link className={styles.link} to='/signup'>
                    Sign Up
                </Link>
            </div>

            <Footer />
        </StartPage>
    );
}

export default SignIn;