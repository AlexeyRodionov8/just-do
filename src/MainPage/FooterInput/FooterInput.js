import React from 'react';

import styles from './FooterInput.module.css';
import { CustomField } from '../../common';

const FooterInput = (props) => {
    return (
        <div className={styles.box}>
            <input className={styles.field} type='text' placeholder='Enter task title...' />
        </div>
    );
}

export default FooterInput;