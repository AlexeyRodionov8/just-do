import React from 'react';

import styles from './DeleteBox.module.css';
import ModalBox from '../../../ModalBox/ModalBox';
import BlueButton from '../../../../common/BlueButton/BlueButton';
import GrayButton from '../../../../common/GrayButton/GrayButton';

const DeleteBox = (props) => {
    const titleText = 'Are you sure you want to delete the task?';

    return (
        <ModalBox {...props} title={titleText}>
            <div className={styles.buttonWrapper}>
                <BlueButton title='Delete' click={props.delete} />
                <GrayButton title='Cancel' click={props.close} />
            </div>
        </ModalBox>
    );
}

export default DeleteBox;