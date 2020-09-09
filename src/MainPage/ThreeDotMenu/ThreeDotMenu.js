import React, { useState } from 'react';

import styles from './ThreeDotMenu.module.css';
import ModalMenu from './ModalMenu/ModalMenu';

const ThreeDotMenu = () => {

    const [ showMenu, setShowMenu ] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.circle} onClick={ () => setShowMenu(!showMenu) }>
                <div className={styles.icon}></div>
            </div>
            
            { showMenu && <ModalMenu /> }
        </div>
    );
}

export default ThreeDotMenu;