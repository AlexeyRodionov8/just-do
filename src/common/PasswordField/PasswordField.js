import React from 'react';
import { CustomField } from '../';

import openEye from '../../assets/open_eye.svg';
import closeEye from '../../assets/close_eye.svg';

const PasswordField = props => {
    const [ isShow, setShow ] = React.useState(false);

    let icon = openEye;
    let type = 'password';

    if (isShow) {
        icon = closeEye;
        type = 'text'
    }

    const toggleHandler = () => {
        setShow(!isShow);
    }

    return (
        <CustomField
            {...props}
            type={type}
            icon={icon}
            click={toggleHandler}
        />
    );
}

export default PasswordField;