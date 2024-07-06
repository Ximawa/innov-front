import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecetteForm from "../components/forms/RecetteForm";
import AddButton from "../components/buttons/AddButton";
import GreenButton from "../components/buttons/GreenButton";

const RecetteAddPage = () => {
  const navigate = useNavigate();
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

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onSubmit = async (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/addRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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

  return (
    <div>
      <div className="text-xl">Ajouter une recette</div>
      <div className="flex justify-end">
        <AddButton text="Ajouter un ingredient" onCLick={addIngredient} />
        <GreenButton text="Enregistrer" onCLick={onSubmit} />
      </div>
      <RecetteForm
        name={name}
        description={description}
        ingredients={ingredients}
        setIngredients={setIngredients}
        onChangeName={handleChangeName}
        onChangeDescription={handleChangeDescription}
      />
    </div>
  );
};

export default RecetteAddPage;
