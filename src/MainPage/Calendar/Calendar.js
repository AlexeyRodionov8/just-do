import React from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Modal from '../Modal/Modal';
import './Calendar.css';

const Calendar = (props) => {
    const {date, changeDate} = props;

    return (
        <Modal>
            <ReactCalendar onChange={changeDate} value={date} />
        </Modal>
    );
}

export default Calendar;