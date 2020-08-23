import React from 'react';

import styles from './startPage.module.css';
import logo from './../assets/logo.svg';

const StartPage = props => {
    return (
        <div className={styles.wrap}>
            <div className={styles.leftSide}>
                <div className={styles.leftSideInner}>
                    <img
                        width='40%'
                        heigth='20%'
                        src={logo}
                        alt='JustDo'
                    />
                </div>
            </div>
            <div className={styles.rightSide}>
                { props.children }
            </div>
        </div>
    );
}

export default StartPage;