import React from 'react';

const Recipe = (props) => {

    // const Recipes = props.allRecipes;
console.log(props);
    return (
        <div>
            <div className="Recipe">
        <h2> name: {props.name}</h2>
        <h2> Serving: {props.servings}</h2>
        <h2> Category: {props.category}</h2>
        </div >



        </div >
    )
}

export default Recipe;