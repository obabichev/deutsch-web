import React from 'react';
import './Button.css';

export const Button = ({title, green, blue, onClick}) => {
    const className = `core-button ${green ? 'core-button-green' : ''} ${blue ? 'core-button-blue' : ''}`;

    const onClickInternal = (event) => {
        event.stopPropagation();
        if (onClick) {
            onClick();
        }
    };

    return <button className={className}
                   onClick={onClickInternal}>
        {title}
    </button>;
};
