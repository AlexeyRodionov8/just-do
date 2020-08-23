import React from 'react';
import { Link } from 'react-router-dom';
import styles from './startPage.module.css';

const Footer = () => {
    const termsLink = (
        <Link className={styles.link} to='/terms'>
            Terms conditions
        </Link>
    );

    const policyLink = (
        <Link className={styles.link} to='/policy'>
            Privacy Policy
        </Link>
    );

    return (
        <div className={styles.footer}>
            By accessing your account, you agree to our {termsLink} and {policyLink}
        </div>
    );
}

export default Footer;