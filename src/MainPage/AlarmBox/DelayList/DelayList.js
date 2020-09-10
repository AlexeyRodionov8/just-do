import React from 'react';

import styles from './DelayList.module.css';
import * as mockData from '../../../common/MockData';

const DelayList = (props) => {
    const {setValue} = props;

    const alarms = mockData.alarms.map( item => (
        <div key={item.id} className={styles.title} onClick={() => setValue(item)}>
            {item.title}
        </div>
    ));

    return (
        <div className={styles.wrapper}>
            {alarms}
        </div>
    );
}

export default DelayList;