import React from 'react';

import logo from './../assets/logo.svg';
import styles from './MainPage.module.css';
import FoldingButton from '../common/FoldingButton/FoldingButton';
import FooterInput from './FooterInput/FooterInput';
import TaskList from './TaskList/TaskList';
import * as mockData from '../common/MockData';

const MainPage = () => {
    const menuItems = mockData.priorities.map( item => {
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
                        <TaskList />
                    </div>
                    <div className={styles.footer}>
                        <FooterInput priorities={mockData.priorities} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;