import React from 'react';
import { Link } from 'react-router-dom';

import styles from './startPage.module.css';
import Footer from './Footer';
import StartPage from './StartPage';
import CustomField from '../common/CustomField/CustomField';
import CustomButton from '../common/CustomButton/CustomButton';
import { PasswordField } from '../common/';

const errors = {
    email: 'This address does not exist',
    password: 'The password must contain capital letters',
    confirmPassword: 'Password do not match'
}

const SignUp = () => {
    const signIn = (
        <Link className={styles.link} to='/signin'>
            Sign In
        </Link>
    );

    const [ hasError, setError ] = React.useState(false);

    const handleClick = () => {
        setError(!hasError);
    }

    let emailError = null;
    let passwordError = null;
    let confirmError = null;

    if (hasError) {
        emailError = errors.email;
        passwordError = errors.password;
        confirmError = errors.confirmPassword;
    }

    return (
        <StartPage>
            <div className={styles.loginForm}>
                <div className={styles.title}>Sign Up</div>

                <div className={styles.fields}>
                    <CustomField type='email' placeholder='E-mail' error={emailError} />
                    <PasswordField placeholder='Password' error={passwordError} />
                    <PasswordField placeholder='Confirm password' error={confirmError} />
                </div>

                <CustomButton title='Sign Up' click={handleClick} />

                <div>
                    I already have an account. { signIn }
                </div>
            </div>

            <Footer />
        </StartPage>
    );
}

export default SignUp;