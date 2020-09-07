import React from 'react';

import FoldingButton from '../../../common/FoldingButton/FoldingButton';
import styles from './NumberPicker.module.css';

const NumberPicker = (props) => {
    const { value, change } = props;

    const increase = () => {
        change(value + 1);
    }

    const decrease = () => {
        change(value - 1);
    }

    return (
        <div className={styles.box}>
            <span className={styles.button} onClick={increase}>
                <FoldingButton isOpen={false} />
            </span>

            <div className={styles.number}>
                {('0' + value).slice(-2)}
            </div>

            <span className={styles.button} onClick={decrease}>
                <FoldingButton isOpen={true} />
            </span>
        </div>
    );
}

export default NumberPicker;