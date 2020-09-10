import React from 'react';

import styles from './DelayBox.module.css';
import ModalBox from '../../ModalBox/ModalBox';
import BlueButton from '../../../common/BlueButton/BlueButton';

const DelayBox = (props) => {
    const {delayTime, closeBox} = props;
    const titleText = 'The task was postponed for ' + delayTime;

    return (
        <ModalBox {...props} title={titleText}>
            <div className={styles.buttonWrapper}>
                <BlueButton title='OK' click={closeBox} />
            </div>
        </ModalBox>
    );
}

export default DelayBox;