import * as actions from '../actions/index';

const initialState = {
    tasks: [
        {title: 'First', date: new Date(), time: {hour: 13, minute: 0}, alarmId: 2, priority: {id: 4, name:'Neutral', color: '#BBBBC7'}},
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TASK:
            const tasks = [...state.tasks];
            tasks.push(action.task);
            return tasks;
        default:
            return state;
    }
}

export default reducer;