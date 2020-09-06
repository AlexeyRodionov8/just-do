import React from 'react';

import logo from './../assets/logo.svg';
import styles from './MainPage.module.css';
import FoldingButton from '../common/FoldingButton/FoldingButton';
import FooterInput from './FooterInput/FooterInput';

const priorities = [
    {name:'Urgently', color: ''},
    {name:'Important', color: ''},
    {name:'Normal', color: ''},
    {name:'Neutral', color: ''},
];

const MainPage = (props) => {
    const menuItems = priorities.map( item => {
        return (
            <div className={styles.menuItem}>{item.name}</div>
        );
    });
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <div className={styles.leftInside}>
                    <img width='80%' src={logo} alt='JustDo' />
                    <div className={styles.titleBlock}>
                        <span className={styles.priorityTitle}>Priority</span>
                        <FoldingButton isOpen={false} color='white' />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.activeItem}>
                            All
                        </div>
                        { menuItems }
                        <div className={styles.addItem}>
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.rightInside}>
                    <div className={styles.content}>
                        Rigth side
                    </div>
                    <FooterInput />
                </div>
            </div>
        </div>
    );
}

export default MainPage;