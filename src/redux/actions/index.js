export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const CHANGE_COMPLETE = 'CHANGE_COMPLETE';
export const CHANGE_TIME = 'CHANGE_TIME';
export const CHANGE_PRIORITY = 'CHANGE_PRIORITY';
export const CHANGE_ALARM = 'CHANGE_ALARM';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        task
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    };
}

export const setDescription = (id, description) => {
    return {
        type: SET_DESCRIPTION,
        payload: {
            id,
            description
        }
    }
}

export const changeComplete = (id) => {
    return {
        type: CHANGE_COMPLETE,
        payload: {
            id
        }
    };
}

export const changeTime = (id, time) => {
    return {
        type: CHANGE_TIME,
        payload: {
            id,
            time
        }
    }
}

export const changePriority = (id, priority) => {
    return {
        type: CHANGE_PRIORITY,
        payload: {
            id,
            priority
        }
    }
}

export const changeAlarm = (id, alarm) => {
    return {
        type: CHANGE_ALARM,
        payload: {
            id,
            alarm
        }
    }
}