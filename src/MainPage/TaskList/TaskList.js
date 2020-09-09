import React from 'react';
import { useSelector } from 'react-redux';

import * as utils from '../../common/utils';
import TaskByDay from './TaskByDay/TaskByDay';

const TaskList = () => {
    const taskItems = useSelector(state => state.tasks);

    const days = [];
    for (let i = 0; i < 30; i++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        days.push(currentDate);
    }

    const daysWithTasks = days.map( (day, index) => {
        const filteredTasks = taskItems.filter( task => utils.compareDate(task.date, day));

        return (
            <TaskByDay
                key={index}
                day={day}
                tasks={filteredTasks}
            />
        );
    });

    return (
        <div>
            {daysWithTasks}
        </div>
    )
}

export default TaskList;