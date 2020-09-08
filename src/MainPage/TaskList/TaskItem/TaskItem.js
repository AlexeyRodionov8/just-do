import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './TaskItem.module.css';
import Description from './Description/Description';
import * as actions from '../../../redux/actions/index';
import ToolPanel from './ToolPanel/ToolPanel';

const TaskItem = (props) => {
    const { task } = props;

    const [showDelete, setShowDelete] = useState(false);

    const dispatch = useDispatch();

    const updateDescriptionHandle = (description) => {
        dispatch(actions.setDescription(task.id, description));
    }

    const updateCompleteHandle = () => {
        dispatch(actions.changeComplete(task.id));
    }

    const clickDeleteHandle = () => {
        dispatch(actions.deleteTask(task.id));
    }

    let deleteBlock = null;

    if (showDelete) {
        deleteBlock = (
            <div className={styles.deleteBlock}>
                <div className={styles.deleteIcon} onClick={clickDeleteHandle}></div>
            </div>
        );
    }

    return (
        <div
            className={styles.taskItem}
            onMouseEnter={ () => setShowDelete(true) }
            onMouseLeave={ () => setShowDelete(false) }
        >
            <div className={styles.checkBoxBlock}>
                <input type='checkbox' value={task.isComplete} onChange={updateCompleteHandle} />
            </div>

            <div className={styles.taskContent}>
                <div className={styles.title}>
                    {task.title}
                </div>

                <Description
                    value={task.description}
                    updateDescription={updateDescriptionHandle}
                />
                
                <div className={styles.toolPanel}>
                    <ToolPanel task={task} />
                </div>
            </div>

            {deleteBlock}
        </div>
    )
}

export default TaskItem;