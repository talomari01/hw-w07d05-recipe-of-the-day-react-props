import React from 'react'

const Ingredient =(props) => {


const Ingredients = props.Ingredient;

/* Console.log(Ingredients); */

return (

    <div className="Ingredient">

    <h1>{Ingredients.Ingredient}</h1>
    <h2>{Ingredients.amount}</h2>

    </div>
)
}


export default Ingredient;