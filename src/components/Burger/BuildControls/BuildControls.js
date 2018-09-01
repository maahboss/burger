import React  from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';



const controls = [
    {label:'Salade',type:'salad',pricePer:0.5},
    {label:'Salami',type:'salami',pricePer:0.7},
    {label:'Cheese',type:'cheese',pricePer:0.4},
    {label:'Meat',type:'meat',pricePer:0.7},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
       <p>Current Price: <strong className={classes.Price}>{props.price.toFixed(2)} $</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                pricePerOne={ctrl.pricePer}
                added={() => props.ingredentAdded(ctrl.type)}
                removed={() => props.ingredentRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
    </div>
);

export default buildControls;