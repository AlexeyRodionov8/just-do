import React from 'react';

import styles from './customField.module.css';

const CustomField = props => {
    const icon = props.icon ?
        <img className={styles.icon} src={props.icon} onClick={props.click} alt='' /> :
        null;

    return (
        <div className={styles.fieldBlock}>
            <input
                className={styles.field}
                type={props.type}
                placeholder={props.placeholder}
            />

            { icon }

            <div className={styles.error}>
                { props.error }
            </div>
        </div>
    );
}

export default CustomField;