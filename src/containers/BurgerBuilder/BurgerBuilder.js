import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControlls from '../../components/Burger/BuildControlls/BuildControlls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        };
    }

    addIngredientHandler = (ingredient) => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[ingredient]++;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[ingredient];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (ingredient) => {
        const updatedIngredients = {...this.state.ingredients};
        console.log('remove');
        if (updatedIngredients[ingredient] > 0) {
            updatedIngredients[ingredient]--;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[ingredient];
            this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        }
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControlls
                    totalPrice={this.state.totalPrice}
                    onAddIngredient={this.addIngredientHandler}
                    onRemoveIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }

}

export default BurgerBuilder;
