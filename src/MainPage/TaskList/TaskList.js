import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import TaskItem from './TaskItem/TaskItem';
import styles from './TaskList.module.css';
import * as utils from '../../common/utils';
import FoldingButton from '../../common/FoldingButton/FoldingButton';

const TaskList = () => {
    // Get dates
    const days = [];
    for (let i = 0; i < 15; i++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        days.push(currentDate);
    }

    // Get tasks by date
    const taskItems = useSelector(state => state.tasks);
    const sortTasks = taskItems.sort(utils.compareById);

    const tasks = sortTasks.map( task => (
        <TaskItem key={task.id} task={task} />
    ));

    const daysWithTasks = days.map( day => {
        const dateTitle = utils.getStrByDate(day);

        return (
            <div className={styles.taskList}>
                <div className={styles.dateTitleBlock}>
                    <span className={styles.dateTitle}>{dateTitle}</span>
                    <FoldingButton isOpen={false} color='#BBBBC7' />
                </div>

                { tasks }
            </div>
        );
    });

    return (
        <div className={styles.dayList}>
            {daysWithTasks}
        </div>
    )
}

export default TaskList;