import * as actions from '../actions/index';

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Выполнить заказ по логотипу',
            description: 'Разработать логотип для компании Z, цвета: белый и синий',
            date: (new Date()),
            time: {
                hour: 13,
                minute: 0
            },
            alarm: {
                id: 4,
                title: '1 hour.'
            },
            priority: {
                id: 1,
                name: 'Urgently',
                color: '#F24A3C',
                title: 'Urgently priority'
            },
            isComplete: false
        },
        {
            id: 2,
            title: 'Прием у врача',
            description: 'Кабинет №27, Остапенко А.В.',
            date: new Date(),
            time: {
                hour: 15,
                minute: 20
            },
            alarm: {
                id: 3,
                title: '30 min.'
            },
            priority: {
                id: 2,
                name: 'Important',
                color: '#F1A41E',
                title: 'Important priority'
            },
            isComplete: false
        },
        {
            id: 3,
            title: 'Сходить в магазин',
            description: '',
            date: new Date(),
            time: {
                hour: 21,
                minute: 0
            },
            alarm: {
                id: 2,
                title: '10 min.'
            },
            priority: {
                id: 4,
                name: 'Neutral',
                color: '#BBBBC7',
                title: 'Neutral priority'
            },
            isComplete: false
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TASK:
            return addTask(state, action);
        case actions.DELETE_TASK:
            return deleteTask(state, action);
        case actions.SET_DESCRIPTION:
            return updateDescription(state, action);
        case actions.CHANGE_COMPLETE:
            return updateComplete(state, action);
        case actions.CHANGE_TIME:
            return updateTime(state, action);
        case actions.CHANGE_ALARM:
            return updateAlarm(state, action);
        case actions.CHANGE_PRIORITY:
            return updatePriority(state, action);
        default:
            return state;
    }
}

const addTask = (state, action) => {
    const tasks = [...state.tasks];
    tasks.push(action.task);

    return {
        ...state,
        tasks
    }
}

const deleteTask = (state, action) => {
    const { id } = action.payload;

    const updatedTasks = state.tasks.filter( task => task.id !== id );

    return {
        ...state,
        tasks: updatedTasks
    };
}

const updateDescription = (state, action) => {
    const { id, description } = action.payload;

    const updatedTask = getTaskCopy(state, id);
    updatedTask.description = description;

    return getUpdatedState(state, id, updatedTask)
}

const updateComplete = (state, action) => {
    const { id } = action.payload;

    const updatedTask = getTaskCopy(state, id);
    updatedTask.isComplete = !updatedTask.isComplete;

    return getUpdatedState(state, id, updatedTask)
}

const updateTime = (state, action) => {
    const { id, time } = action.payload;

    const updatedTask = getTaskCopy(state, id);
    updatedTask.time = time;

    return getUpdatedState(state, id, updatedTask)
}

const updateAlarm = (state, action) => {
    const { id, alarm } = action.payload;

    const updatedTask = getTaskCopy(state, id);
    updatedTask.alarm = alarm;

    return getUpdatedState(state, id, updatedTask)
}

const updatePriority = (state, action) => {
    const { id, priority } = action.payload;

    const updatedTask = getTaskCopy(state, id);
    updatedTask.priority = priority;

    return getUpdatedState(state, id, updatedTask)
}

/* COMMON */
const getTaskCopy = (state, id) => {
    const tempTask = state.tasks.filter( task => task.id === id );
    return {
        ...tempTask[0]
    };
}

const getUpdatedState = (state, id, updatedTask) => {
    const updatedTasks = state.tasks.filter( task => task.id !== id );
    updatedTasks.push(updatedTask);

    return {
        ...state,
        tasks: updatedTasks
    };
}

export default reducer;