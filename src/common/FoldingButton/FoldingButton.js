import React from 'react';

const FoldingButton = (props) => {
    const {color, isOpen} = props;
    const fillColor = color ? color : '#BBBBC7';

    const closeButton = <polyline points='2,12 8,6 14,12' />;
    const openButton = <polyline points='2,6 8,12 14,6' />;

    const button = isOpen ? openButton : closeButton;
    return (
        <React.Fragment>
            <svg width='16' height='16' viewBox='0 0 16 16' strokeWidth='2' stroke={fillColor} fill='none'>
                { button }
            </svg>
        </React.Fragment>
    );
}

export default FoldingButton;