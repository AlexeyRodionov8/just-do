import React from 'react';

import styles from './customButton.module.css';

const CustomButton = props => {
    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={props.click}>
                { props.title }
            </button>
        </div> 
    );
}

export default CustomButton;