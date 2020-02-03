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
            <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControll
                    onAddIngredient={() => props.onAddIngredient(control.type)}
                    onRemoveIngredient={() => props.onRemoveIngredient(control.type)}
                    key={control.label}
                    label={control.label}
                    disabled={props.disabled[control.type]}
                />;
            })}
            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.onPurchase}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControlls;
