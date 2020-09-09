import React from 'react';
import { useSelector } from 'react-redux';

import TaskItem from './TaskItem/TaskItem';
import styles from './TaskList.module.css';
import * as utils from '../../common/utils';
import FoldingButton from '../../common/FoldingButton/FoldingButton';

const TaskList = () => {
    const taskItems = useSelector(state => state.tasks);

    const days = [];
    for (let i = 0; i < 30; i++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        days.push(currentDate);
    }

    const daysWithTasks = days.map( (day, index) => {
        const dateTitle = utils.getStrByDate(day);
        
        const filteredTasks = taskItems.filter( task => utils.compareDate(task.date, day));

        const sortTasks = filteredTasks.sort(utils.compareById);

        const tasks = sortTasks.map( task => (
            <TaskItem key={task.id} task={task} />
        ));

        return (
            <div className={styles.taskList} key={index}>
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