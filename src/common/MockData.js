export const priorities = [
    { id: 1, name: 'Urgently', color: '#F24A3C', title: 'Urgently priority' },
    { id: 2, name: 'Important', color: '#F1A41E', title: 'Important priority' },
    { id: 3, name: 'Normal', color: '#56CCF2', title: 'Normal priority' },
    { id: 4, name: 'Neutral', color: '#BBBBC7', title: 'Neutral priority' },
];

export const alarms = [
    { id: 1, title: '5 min.' },
    { id: 2, title: '10 min.' },
    { id: 3, title: '30 min.' },
    { id: 4, title: '1 hour.' },
    { id: 5, title: '3 hours.' },
    { id: 6, title: '1 day.' },
    { id: 7, title: '1 week.' },
];

export const getPriority = (id) => {
    const tempPriority = priorities.filter( item => item.id === id);
    return tempPriority[0];
}

export const getAlarm = (id) => {
    const tempAlarm = alarms.filter( item => item.id === id);
    return tempAlarm[0];
}