import React from 'react';
import './CircleSpinner.css';

const CircleSpinner = () => {
    return (
        <div className='spinnerBackdrop'>
            <div class='spinnerLoader'>Loading...</div>
        </div>
    );
};

export default CircleSpinner;