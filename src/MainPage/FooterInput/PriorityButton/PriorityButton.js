import React from 'react';

import styles from './PriorityButton.module.css';

const PriorityButton = (props) => {
    const { icon, click, isClicked, color } = props;

    let classNames = [styles.buttonItem];

    if (isClicked) {
        classNames.push(styles.clicked) 
    } else {
        classNames.push(styles.default)
    }

    return (
        <div className={classNames.join(' ')} onClick={click}>
            {icon(color)}
        </div>
    );
}

export default PriorityButton;