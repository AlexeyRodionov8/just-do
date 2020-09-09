import React from 'react';

import styles from './ModalBox.module.css';
import Modal from '../../common/Modal/Modal';

const ModalBox = (props) => {
    const { title, children } = props;

    return (
        <Modal>
            <div className={styles.backdrop}>
                <div className={styles.box}>
                    <div className={styles.title}>
                        {title}
                    </div>

                    <div className={styles.buttonBlock}>
                        {children}
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalBox;