import React from 'react';
import classes from './Burger.css';
import BurgerIngredents from './BurgerIngredents/BurgerIngredents';

const burger = (props) => {
    let transformedIngredents = Object.keys(props.ingredents)
        .map(igKey => {
            return [...Array(props.ingredents[igKey])].map((_,i) => {
              return  <BurgerIngredents key={igKey+i} type={igKey} />;
            });
        })
        .reduce((arr,el) => {
          return  arr.concat(el)
        },[]);
        
        if(transformedIngredents.length ===0) {
            transformedIngredents = <p>Please Start Adding Ingredient</p>
        }
        
    return (
        <div className={classes.Burger}>
            <BurgerIngredents type="bread-top" />
            {transformedIngredents}
            <BurgerIngredents type="bread-bottom" />
        </div>
    );

};


export default burger;