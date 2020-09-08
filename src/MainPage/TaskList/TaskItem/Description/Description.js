import React, { useState, useRef, useEffect } from 'react';

import styles from './Description.module.css';

const Description = (props) => {
    const { value, updateDescription } = props;

    const placeholder = 'Enter description...';

    const [text, setText] = useState(value)
    const [writeDescription, setWriteDescription] = useState(false);

    const descriptionInputRef = useRef(null);

    useEffect(() => {
        if (writeDescription) {
            descriptionInputRef.current.focus();
        }
    }, [writeDescription])

    let descriptionBlock = text ?
        (<span>{text}</span>) :
        (<span>{placeholder}</span>);

    
    const keyDownHandle = (event) => {
        if (event.key === 'Enter') {
            saveDescription();
        }
    }

    const focusOutHandle = () => {
        saveDescription();
    }

    const saveDescription = () => {
        updateDescription(text);
        setWriteDescription(false);
    }

    const onChangeHandle = (event) => {
        setText(event.target.value);
    }

    if (writeDescription) {
        descriptionBlock = (
            <input
                type='text'
                ref={descriptionInputRef}
                onKeyDown={keyDownHandle}
                onBlur={focusOutHandle}
                value={text}
                onChange={onChangeHandle}
                placeholder={placeholder}
            />
        );
    }

    return (
        <div className={styles.description} onClick={() => setWriteDescription(true)}>
            {descriptionBlock}
        </div>
    );
}

export default Description; 