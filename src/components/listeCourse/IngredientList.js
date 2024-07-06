import React from "react";
import IngredientCheck from "./IngredientCheck";

const IngredientList = ({ ingredients }) => {
  // Sort ingredients by aisle before mapping
  const sortedIngredients = ingredients.sort((a, b) =>
    a.aisle.localeCompare(b.aisle)
  );

  // Group ingredients by aisle
  const groupedByAisle = sortedIngredients.reduce((acc, ingredient) => {
    const { aisle } = ingredient;
    if (!acc[aisle]) {
      acc[aisle] = [];
    }
    acc[aisle].push(ingredient);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedByAisle).map(([aisle, ingredients], index) => (
        <div key={index}>
          <h3>{aisle}</h3>
          {ingredients.map((ingredient, i) => (
            <IngredientCheck
              key={i}
              name={ingredient.name}
              quantity={ingredient.quantity}
              unit={ingredient.unit}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default IngredientList;
