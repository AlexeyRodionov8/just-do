import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './ToolPanel.module.css';
import TimePicker from '../../../TimePicker/TimePicker';
import AlarmPicker from '../../../AlarmPicker/AlarmPicker';
import PriorityPicker from '../../../PriorityPicker/PriorityPicker';
import * as mockData from '../../../../common/MockData';
import * as actions from '../../../../redux/actions/index';
import * as icons from '../../../Icons';
import ButtonIcon from '../../../FooterInput/ButtonIcon/ButtonIcon';
import PriorityButton from '../../../FooterInput/PriorityButton/PriorityButton';
import * as utils from '../../../../common/utils';

const ToolPanel = (props) => {
    const {id, time, alarm, priority} = props.task;

    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showAlarm, setShowAlarm] = useState(false);
    const [showPriority, setShowPriority] = useState(false);

    const showTimePickerHandler = () => {
        closeAllModal();
        setShowTimePicker(!showTimePicker);
    }

    const showAlarmHandler = () => {
        closeAllModal();
        setShowAlarm(!showAlarm);
    }

    const showPriorityHandler = () => {
        closeAllModal();
        setShowPriority(!showPriority);
    }

    const closeAllModal = () => {
        setShowTimePicker(false);
        setShowAlarm(false);
        setShowPriority(false);
    }

    const dispatch = useDispatch();

    const hourChangeHandler = (hour) => {
        const newHour = hour > 23 ?
            0 : 
            hour < 0 ?
                23 :
                hour;

        dispatch(actions.changeTime(id, {...time, hour: newHour}));
    }

    const minuteChangeHandler = (minute) => {
        const newMinute = minute > 59 ?
            0 : 
            minute < 0 ?
                59 :
                minute;

        dispatch(actions.changeTime(id, {...time, minute: newMinute}));
    }

    const alarmChangeHandler = (alarm) => {
        dispatch(actions.changeAlarm(id, alarm));
        setShowAlarm(false);
    }
    const priorityChangeHandler = (priority) => {
        dispatch(actions.changePriority(id, priority));
        setShowPriority(false);
    }

    return (
        <div className={styles.buttonList}>
            {showPriority && <PriorityPicker priorities={mockData.priorities} priority={priority} changePriority={priorityChangeHandler} />}
            <PriorityButton icon={icons.dotIcon} color={priority.color} click={showPriorityHandler} isClicked={showPriority} />
            <nav className={styles.iconText}>{priority.title}</nav>

            {showTimePicker && <TimePicker time={time} changeHour={hourChangeHandler} changeMinute={minuteChangeHandler} />}
            <ButtonIcon icon={icons.clockIcon} click={showTimePickerHandler} isClicked={showTimePicker} />
            <nav className={styles.iconText}>{utils.objToTime(time)}</nav>

            {showAlarm && <AlarmPicker alarms={mockData.alarms} alarm={alarm} changeAlarm={alarmChangeHandler} />}
            <ButtonIcon icon={icons.bellIcon} click={showAlarmHandler} isClicked={showAlarm} />
            <nav className={styles.iconText}>{alarm.title}</nav>
        </div>
    );
}

export default ToolPanel;