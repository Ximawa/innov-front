import React, { useState, useEffect } from "react";
import CardRecetteList from "../components/recettes/CardRecetteList";
import GreenButton from "../components/buttons/GreenButton";
import IngredientList from "../components/listeCourse/IngredientList";

const ListPage = () => {
  const [recettes, setRecettes] = useState([]);
  const [recetteSelected, setRecetteSelected] = useState([]);
  const [selectedID, setSelectedID] = useState([]);
  const [ingredients, setIngredients] = useState([
    {
      name: "",
      quantity: "",
      unit: "",
      rayon: "",
    },
  ]);
  const [isListGenerated, setIsListGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  useEffect(() => {
    const fetchRecettes = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://127.0.0.1:8000/recette", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
          }),
        });
        const data = await response.json();
        setRecettes(data);
      } catch (error) {
        console.error("Failed to fetch recettes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecettes();
  }, []);

  const handleGetList = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/listeCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_recipes: selectedID }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        setIngredients(data);
      }
      setIsListGenerated(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleClickRecette = (recette) => {
    const index = recettes.findIndex((r) => r.id === recette.id);

    if (index > -1) {
      const [removedRecette] = recettes.splice(index, 1);

      setRecettes([...recettes]);

      setRecetteSelected((recetteSelected) => {
        const newRecetteSelected = [...recetteSelected, removedRecette];
        return newRecetteSelected;
      });

      setSelectedID((prevSelectedID) => [...prevSelectedID, removedRecette.id]);
    }
  };

  const handleClickSelectedRecette = (recette) => {
    const index = recetteSelected.findIndex((r) => r.id === recette.id);

    if (index > -1) {
      const [removedRecette] = recetteSelected.splice(index, 1);

      setRecetteSelected([...recetteSelected]);
      setRecettes((recettes) => [...recettes, removedRecette]);
      setSelectedID((prevSelectedID) =>
        prevSelectedID.filter((id) => id !== removedRecette.id)
      );
    }
  };

  return isListGenerated ? (
    <>
      <div className="text-xl mb-6">Votre liste de course</div>
      <div className="p-4 mb-6 border-2 border-gray-200 border-dashed rounded-lg ">
        <IngredientList ingredients={ingredients} />
      </div>
    </>
  ) : (
    <>
      <div className="text-xl mb-6">Preparation de votre liste de course</div>
      <div className="p-4 mb-6 border-2 border-gray-200 border-dashed rounded-lg ">
        <div className="text-xl">Recette Selectionne</div>
        {recetteSelected.length === 0 ? null : (
          <div className="flex justify-end">
            <GreenButton
              text="Generer votre liste de courses"
              onCLick={handleGetList}
            />
          </div>
        )}
        <div className="grid mt-4 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {recetteSelected.length === 0 ? (
            <div>Selectionner une recette</div>
          ) : (
            recetteSelected.map((recette) => (
              <>
                <CardRecetteList
                  key={recette.id}
                  titre={recette.name}
                  description={recette.description}
                  onClick={() => handleClickSelectedRecette(recette)}
                />
              </>
            ))
          )}
        </div>
      </div>
      <div className="p-4 mb-6 border-2 border-gray-200 border-dashed rounded-lg ">
        <div className="text-xl">Toutes vos recettes</div>
        <div className="grid mt-4 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            recettes.map((recette) => (
              <CardRecetteList
                key={recette.id}
                titre={recette.name}
                description={recette.description}
                onClick={() => handleClickRecette(recette)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ListPage;
