import React from 'react';

import Modal from '../Modal/Modal';
import styles from './TimePicker.module.css';
import NumberPicker from './NumberPicker/NumberPicker';

const TimePicker = (props) => {
    const {time, changeHour, changeMinute} = props;

    return (
        <Modal>
            <div className={styles.wrapper}>
                <NumberPicker value={time.hour} change={changeHour} />
                <NumberPicker value={time.minute} change={changeMinute} />
            </div>
        </Modal>
    );
}

export default TimePicker;