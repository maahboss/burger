import React,{Component,Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDENT_PRICE = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    salami:0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredents:{
            salad:0,
            salami:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }

    addIngredentHandler = (type) => {
        const oldCount = this.state.ingredents[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredents = {
            ...this.state.ingredents
        };
        updatedIngredents[type] = updatedCounted;
        const priceAddition = INGREDENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredents:updatedIngredents});

    }

    removeIngredentHandler = (type) => {
        const oldCount = this.state.ingredents[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredents = {
            ...this.state.ingredents
        };
        updatedIngredents[type] = updatedCounted;
        const priceDeduction = INGREDENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice,ingredents:updatedIngredents});
    }

    render() {
        const disableinfo = {
            ...this.state.ingredents
        };
        for (let key in disableinfo) {
            disableinfo[key] = disableinfo[key] <= 0
        }
        return (
          <Fragment>
            <Burger ingredents={this.state.ingredents} />
            <BuildControls
                ingredentAdded={this.addIngredentHandler}
                ingredentRemoved={this.removeIngredentHandler}
                disabled={disableinfo}
                price={this.state.totalPrice} />
          </Fragment>
        );
    }
}

export default BurgerBuilder;