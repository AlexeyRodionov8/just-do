import React, { useState } from 'react';

import styles from './TaskByDay.module.css';
import * as utils from '../../../common/utils';
import FoldingButton from '../../../common/FoldingButton/FoldingButton';
import TaskItem from '../TaskItem/TaskItem';

const TaskByDay = (props) => {
    const { day, tasks } = props;
    const [ showTasks, setShowTasks ] = useState(false);

    const dateTitle = utils.getStrByDate(day);    
    
    const sortTasks = tasks.sort(utils.compareById);

    const tastByDay = sortTasks.length > 0 ?
        sortTasks.map( task => (
            <TaskItem key={task.id} task={task} />
        )) :
        <div className={styles.emptyBlock}>No tasks yet.</div>;

    const taskBlocks = showTasks ? tastByDay : null;

    const showTasksHandle = () => {
        setShowTasks(!showTasks);
    }

    return (
        <div className={styles.taskList}>
            <div className={styles.dateTitleBlock} onClick={showTasksHandle}>
                <span className={styles.dateTitle}>{dateTitle}</span>
                <FoldingButton isOpen={!showTasks} color='#BBBBC7' />
            </div>

            { taskBlocks }
        </div>
    );
}

export default TaskByDay;