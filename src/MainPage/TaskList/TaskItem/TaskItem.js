import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './TaskItem.module.css';
import Description from './Description/Description';
import * as actions from '../../../redux/actions/index';
import ToolPanel from './ToolPanel/ToolPanel';
import DeleteBox from './DeleteBox/DeleteBox';

const TaskItem = (props) => {
    const { task } = props;

    const [showDelete, setShowDelete] = useState(false);
    const [showDeleteBox, setShowDeleteBox] = useState(false);

    const openDeleteBox = () => {
        setShowDeleteBox(true);
    }
    const closeDeleteBox = () => {
        setShowDeleteBox(false);
    }

    const dispatch = useDispatch();

    const updateDescriptionHandle = (description) => {
        dispatch(actions.setDescription(task.id, description));
    }

    const updateCompleteHandle = () => {
        dispatch(actions.changeComplete(task.id));
    }

    const deleteTaskHandle = () => {
        dispatch(actions.deleteTask(task.id));
    }

    let deleteBlock = null;

    if (showDelete) {
        deleteBlock = (
            <div className={styles.deleteBlock}>
                <div className={styles.deleteIcon} onClick={openDeleteBox}></div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div
                className={styles.taskItem}
                onMouseEnter={ () => setShowDelete(true) }
                onMouseLeave={ () => setShowDelete(false) }
            >
                <div className={styles.checkBoxBlock}>
                    <input type='checkbox' checked={task.isComplete} onChange={updateCompleteHandle} />
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
            { showDeleteBox && <DeleteBox delete={deleteTaskHandle} close={closeDeleteBox} />}
        </React.Fragment>
    )
}

export default TaskItem;