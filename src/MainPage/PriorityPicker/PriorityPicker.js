import React from 'react';

import styles from './PriorityPicker.module.css';
import Modal from '../Modal/Modal';
import * as icons from '../Icons';

const PriorityPicker = (props) => {
    const {priorities, priority, changePriority} = props;

    const priorityItems = priorities.map( item => {
        let classes = [styles.item];

        if (item.id === priority.id) {
            classes.push(styles.active);
        }

        return (
            <div
                key={item.id}
                className={classes.join(' ')}
                onClick={() => changePriority(item)}
            >
                { icons.dotIcon(item.color) }
                {item.name}
            </div>
        );
    });

    return (
        <Modal>
            <div className={styles.wrapper}>
                {priorityItems}
            </div>
        </Modal>
    );
}

export default PriorityPicker;