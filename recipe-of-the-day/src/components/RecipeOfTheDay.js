import React, { Component } from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay'
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component {
    renderIngredients(){

        const allIngredients = recipeOfTheDay.ingredients.map((Element, index)=>{
            return (
                <Ingredient Ingredient={Element} key={index}/>
            )
        })

        return allIngredients;

    }
    render() {
        return(
            <div className="Leding-header">
            <h2 className='Leding-header'>Recipe of the day</h2>
            






            {this.renderIngredients()}
            
            </div>


        );
    }
}

export default RecipeOfTheDay;