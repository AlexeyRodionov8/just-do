import React from 'react';

import styles from './customField.module.css';

const CustomField = props => {
    const { icon, click, inputType, placeholder, error } = props;

    const logo = icon ?
        <img className={styles.icon} src={icon} onClick={click} alt='' /> :
        null;

    return (
        <div className={styles.fieldBlock}>
            <input
                className={styles.field}
                type={inputType}
                placeholder={placeholder}
            />
            { logo }
            <div className={styles.error}>
                { error }
            </div>
        </div>
    );
}

export default CustomField;