import React from 'react';

import styles from './ButtonIcon.module.css';

const ButtonIcon = (props) => {
    const { icon, click, isClicked } = props;

    let classNames = [styles.buttonItem];

    if (isClicked) {
        classNames.push(styles.clicked) 
    } else {
        classNames.push(styles.default)
    }

    return (
        <div className={classNames.join(' ')} onClick={click}>
            {icon}
        </div>
    );
}

export default ButtonIcon;