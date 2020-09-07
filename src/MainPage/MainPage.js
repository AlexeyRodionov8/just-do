import React from 'react';

import logo from './../assets/logo.svg';
import styles from './MainPage.module.css';
import FoldingButton from '../common/FoldingButton/FoldingButton';
import FooterInput from './FooterInput/FooterInput';

const priorities = [
    {id: 1, name:'Urgently', color: '#F24A3C'},
    {id: 2, name:'Important', color: '#F1A41E'},
    {id: 3, name:'Normal', color: '#56CCF2'},
    {id: 4, name:'Neutral', color: '#BBBBC7'},
];

const MainPage = (props) => {
    const menuItems = priorities.map( item => {
        return (
            <div key={item.id} className={styles.menuItem}>{item.name}</div>
        );
    });
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <div className={styles.leftInside}>
                    <img src={logo} alt='JustDo' />
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
                    <FooterInput priorities={priorities} />
                </div>
            </div>
        </div>
    );
}

export default MainPage;