import React from 'react';

import styles from './AlarmPicker.module.css';
import Modal from '../Modal/Modal';

const AlarmPicker = (props) => {
    const {alarms, alarm, changeAlarm, clientY} = props;

    const alarmItems = alarms.map( item => {
        let classes = [styles.alarmItem];

        if (item.id === alarm.id) {
            classes.push(styles.active);
        }

        return (
            <div
                key={item.id}
                className={classes.join(' ')}
                onClick={() => changeAlarm(item)}
            >
                {item.title}
            </div>
        ); 
    });

    const isTheTop = clientY <= 270;

    return (
        <Modal isTheTop={isTheTop}>
            <div className={styles.wrapper}>
                {alarmItems}
            </div>
        </Modal>
    );
}

export default AlarmPicker;