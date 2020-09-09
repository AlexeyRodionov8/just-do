import React from 'react';

import styles from './customButton.module.css';

const CustomButton = props => {
    const {title, click} = props;
    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={click}>
                { title }
            </button>
        </div> 
    );
}

export default CustomButton;