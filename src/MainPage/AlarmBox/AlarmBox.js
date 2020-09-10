import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socketIOClient from 'socket.io-client';

import styles from './AlarmBox.module.css';
import * as utils from '../../common/utils';
import * as icons from '../Icons';
import PriorityButton from '../FooterInput/PriorityButton/PriorityButton';
import * as actions from '../../redux/actions/index';
import DelayList from './DelayList/DelayList';
import DelayBox from './DelayBox/DelayBox';

const ENDPOINT = 'http://127.0.0.1:3322';

const AlarmBox = () => {
    const [task, setTask] = useState(null);
    const [alarm, setAlarm] = useState(null);
    const [showAlarmMenu, setShowAlarmMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        socket.on('notification', data => {
            setTask(data);
        });
      }, []);

    const dispatch = useDispatch();

    const doneHandle = () => {
        dispatch(actions.changeComplete(task.id));
        setTask(null);
    }

    if (!task) {
        return null;
    }

    const openAlarmMenu = () => {
        setShowAlarmMenu(true)
    }

    const selectDelayHandle = (alarm) => {
        setAlarm(alarm);
        setShowAlarmMenu(false);
        setShowModal(true);
    }

    const setDelayForAlarm = () => {
        setShowModal(false);
        setAlarm(null);
        setTask(null);
    }

    return (
        <div className={styles.wrapper}>
            {showModal && <DelayBox delayTime={alarm.title} closeBox={setDelayForAlarm} />}

            <div className={styles.content}>
                <div className={styles.head}>
                    <PriorityButton icon={icons.dotIcon} color={task.priority.color} isClicked={false} />
                    <div className={styles.time}>
                        {utils.objToTime(task.time)}
                    </div>
                </div>
                <div className={styles.title}>
                    {task.title}
                </div>
                <div className={styles.description}>
                    {task.description}
                </div>
            </div>
            <div className={styles.buttonBox}>
                <div className={styles.buttonWrapper}>
                    <div className={styles.button} onClick={doneHandle}>
                        Done
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.button} onClick={openAlarmMenu}>
                        Later
                    </div>

                    {showAlarmMenu && <DelayList setValue={selectDelayHandle} />}
                </div>
            </div>
        </div>
    );
}

export default AlarmBox;