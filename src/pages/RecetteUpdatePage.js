import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecetteForm from "../components/forms/RecetteForm";
import AddButton from "../components/buttons/AddButton";
import GreenButton from "../components/buttons/GreenButton";
import RedButton from "../components/buttons/RedButton";

const RecetteUpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([
    { name: "", quantity: "", unit: "", rayon: "" },
  ]);

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { name: "", quantity: "", unit: "", rayon: "" },
    ]);
  };

  const deleteIngredient = (index) => {
    console.log("delete ingredient", index);
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const deleteRecipe = async () => {
    console.log("delete recipe", id);
    try {
      const response = await fetch("http://127.0.0.1:8000/deleteRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_recipe: id,
        }),
      });
      const data = await response.json();
      if (data) {
        navigate("/recettes");
      }
    } catch (error) {
      console.error("Failed to delete recette:", error);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onSubmit = async (event) => {
    const token = localStorage.getItem("token");
    console.log(ingredients);
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/updateRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_recipe: id,
          name: name,
          description: description,
          token: token,
          ingredients: ingredients,
        }),
      });
      const data = await response.json();
      if (data) {
        navigate("/recettes");
      }
    } catch (error) {
      console.error("Failed to fetch recettes:", error);
    }
  };

  useEffect(() => {
    const fetchRecetteInfo = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/recette/${id}`, {
          method: "GET",
        });
        const data = await response.json();
        setName(data[0].name);
        setDescription(data[0].description);
        data[1].forEach((ingredient) => {
          if (ingredient.fk_aisle) {
            ingredient.rayon = ingredient.fk_aisle;
            delete ingredient.fk_aisle;
          }
        });
        setIngredients(data[1]);
      } catch (error) {
        console.error("Failed to fetch recettes:", error);
      }
    };

    fetchRecetteInfo();
  }, []);

  return (
    <div>
      <div className="text-xl">Ajouter une recette</div>
      <div className="flex justify-end">
        <AddButton text="Ajouter un ingredient" onCLick={addIngredient} />
        <GreenButton text="Enregistrer" onCLick={onSubmit} />
        <RedButton text="Supprimer" onClick={deleteRecipe} />
      </div>
      <RecetteForm
        name={name}
        description={description}
        ingredients={ingredients}
        setIngredients={setIngredients}
        onChangeName={handleChangeName}
        onChangeDescription={handleChangeDescription}
        onCLick={deleteIngredient}
      />
    </div>
  );
};

export default RecetteUpdatePage;
