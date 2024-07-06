import React, { useState, useEffect } from "react";
import Ingredient from "./Ingredient";

const RecetteForm = ({
  name,
  description,
  ingredients,
  setIngredients,
  onChangeName,
  onChangeDescription,
  onCLick,
}) => {
  const [rayonList, setRayonList] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRayon = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/aisle", {
          method: "GET",
        });
        const data = await response.json();
        setRayonList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch recettes:", error);
      }
    };

    fetchRayon();
  }, []);

  const handleChangeIngredientName = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].name = event.target.value;
    setIngredients(newIngredients);
  };

  const handleChangeIngredientQuantity = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].quantity = event.target.value;
    setIngredients(newIngredients);
  };

  const handleChangeIngredientUnit = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].unit = event.target.value;
    setIngredients(newIngredients);
  };

  const handleChangeIngredientRayon = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].rayon = event.target.value;
    setIngredients(newIngredients);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 pb-8 pt-4">
        <div class="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="name"
            value={name}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nom"
            onChange={onChangeName}
          />
        </div>
        <div>
          <textarea
            id="description"
            rows="4"
            value={description}
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            onChange={onChangeDescription}
          ></textarea>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            id={index}
            name={ingredient.name}
            quantity={ingredient.quantity}
            unit={ingredient.unit}
            rayon={ingredient.rayon}
            rayonList={rayonList}
            onChangeName={(event) => handleChangeIngredientName(event, index)}
            onChangeQuantity={(event) =>
              handleChangeIngredientQuantity(event, index)
            }
            onChangeUnit={(event) => handleChangeIngredientUnit(event, index)}
            onChangeRayon={(event) => handleChangeIngredientRayon(event, index)}
            onClick={() => onCLick(index)}
          />
        ))
      )}
    </div>
  );
};

export default RecetteForm;
