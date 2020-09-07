import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './FooterInput.module.css';
import * as icons from './Icons';
import ButtonIcon from './ButtonIcon/ButtonIcon';
import Calendar from '../Calendar/Calendar';
import TimePicker from '../TimePicker/TimePicker';
import AlarmPicker from '../AlarmPicker/AlarmPicker';
import PriorityPicker from '../PriorityPicker/PriorityPicker';
import PriorityButton from './PriorityButton/PriorityButton';
import * as actions from '../../redux/actions/index';

const alarms = [
    {id: 1, title: '5 min.'},
    {id: 2, title: '10 min.'},
    {id: 3, title: '30 min.'},
    {id: 4, title: '1 hour.'},
    {id: 5, title: '3 hours.'},
    {id: 6, title: '1 day.'},
    {id: 7, title: '1 week.'},
];

const FooterInput = (props) => {
    const {priorities} = props;

    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState({hour: 1, minute: 2});
    const [alarmId, setAlarmId] = useState(3);
    const [priority, setPriority] = useState({id: 4, name:'Neutral', color: '#BBBBC7'});
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showAlarm, setShowAlarm] = useState(false);
    const [showPriority, setShowPriority] = useState(false);

    const textChangeHandler = (event) => {
        setText(event.target.value);
    }

    const showCalendarHandler = () => {
        setShowCalendar(!showCalendar);
        setShowTimePicker(false);
        setShowAlarm(false);
        setShowPriority(false);
    }

    const dateChangeHandler = (date) => {
        setDate(date);
        setShowCalendar(false);
    }

    const showTimePickerHandler = () => {
        setShowTimePicker(!showTimePicker);
        setShowCalendar(false);
        setShowAlarm(false);
        setShowPriority(false);
    }

    const hourChangeHandler = (hour) => {
        const newHour = hour > 23 ?
            0 : 
            hour < 0 ?
                23 :
                hour;

        setTime({...time, hour: newHour});
    }

    const minuteChangeHandler = (minute) => {
        const newMinute = minute > 59 ?
            0 : 
            minute < 0 ?
                59 :
                minute;

        setTime({...time, minute: newMinute});
    }

    const showAlarmHandler = () => {
        setShowAlarm(!showAlarm);
        setShowCalendar(false);
        setShowTimePicker(false);
        setShowPriority(false);
    }

    const alarmChangeHandler = (id) => {
        setAlarmId(id);
        setShowAlarm(false);
    }

    const showPriorityHandler = () => {
        setShowPriority(!showPriority);
        setShowCalendar(false);
        setShowTimePicker(false);
        setShowAlarm(false);
    }

    const priorityChangeHandler = (priority) => {
        setPriority(priority);
        setShowPriority(false);
    }

    const dispatch = useDispatch();

    const addTaskHandler = () => {
        const newTask = {
            title: text,
            description: '',
            date,
            time,
            alarmId,
            priority
        };

        dispatch(actions.addTask(newTask));

        setShowCalendar(false);
        setShowTimePicker(false);
        setShowAlarm(false);
        setShowPriority(false);

        setText('');
        setDate(new Date());
        setTime({hour: 1, minute: 2});
        setAlarmId(3);
        setPriority({id: 4, name:'Neutral', color: '#BBBBC7'});
    }

    return (
        <div className={styles.box}>
            <input className={styles.field} type='text' placeholder='Enter task title...' value={text} onChange={textChangeHandler} />
            <div className={styles.toolPanel}>
                <div className={styles.buttonList}>
                    {showCalendar && <Calendar date={date} changeDate={dateChangeHandler} />}
                    <ButtonIcon icon={icons.calendarIcon} click={showCalendarHandler} isClicked={showCalendar} />

                    {showTimePicker && <TimePicker time={time} changeHour={hourChangeHandler} changeMinute={minuteChangeHandler} />}
                    <ButtonIcon icon={icons.clockIcon} click={showTimePickerHandler} isClicked={showTimePicker} />

                    {showAlarm && <AlarmPicker alarms={alarms} alarmId={alarmId} changeAlarm={alarmChangeHandler} />}
                    <ButtonIcon icon={icons.bellIcon} click={showAlarmHandler} isClicked={showAlarm} />

                    {showPriority && <PriorityPicker priorities={priorities} priority={priority} changePriority={priorityChangeHandler} />}
                    <PriorityButton icon={icons.dotIcon} color={priority.color} click={showPriorityHandler} isClicked={showPriority} />
                </div>
                <button className={styles.sendButton} onClick={addTaskHandler}>Send</button>
            </div>
        </div>
    );
}

export default FooterInput;