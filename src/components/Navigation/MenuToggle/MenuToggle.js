import React from 'react';
import classes from './MenuToggle.module.css';

const MenuToggle = (props) => {
    const classesForMenu = [
        classes.MenuToggle,
        'fa',
    ];

    if (props.isOpen) {
        classesForMenu.push('fa-times');
        classesForMenu.push(classes.open);
    } else {
        classesForMenu.push('fa-bars');
    }

    return (
        <i
            className={classesForMenu.join(' ')}
            onClick={props.onToggle}
        />
    )
};

export default MenuToggle
