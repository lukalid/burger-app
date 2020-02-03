import React from 'react';
import classes from './BuildControlls.module.css';
import BuildControll from './BuildControll/BuildControll';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControlls = (props) => {
    return (
        <div className={classes.BuildControlls}>
            {controls.map(control => {
                return <BuildControll key={control.label} label={control.label}/>;
            })}
        </div>
    );
};

export default buildControlls;
