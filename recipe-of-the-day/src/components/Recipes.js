import React, {Component} from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';
import '../App.css'


class Recipes extends Component {
    renderRecipes(){
        const allRecipes = recipes.map((element, index)=> {
            return(
                <Recipe name={element.name} 
                servings= {element.servings}
                category= {element.category}
                key={index}
                />
            )
        })

        return allRecipes;
    }

    render (){
        return (
            <div className = 'Recipes'>
            <h1 className ='Recipes'> -- </h1>

            {this.renderRecipes()};

            </div>
        )
    }
}

export default Recipes; 
