import React from 'react';

import styles from './AlarmPicker.module.css';
import Modal from '../Modal/Modal';

const AlarmPicker = (props) => {
    const {alarms, alarmId, changeAlarm} = props;

    const alarmItems = alarms.map( item => {
        let classes = [styles.alarmItem];

        if (item.id === alarmId) {
            classes.push(styles.active);
        }

        return (
            <div
                key={item.id}
                className={classes.join(' ')}
                onClick={() => changeAlarm(item.id)}
            >
                {item.title}
            </div>
        ); 
    });

    return (
        <Modal>
            <div className={styles.wrapper}>
                {alarmItems}
            </div>
        </Modal>
    );
}

export default AlarmPicker;