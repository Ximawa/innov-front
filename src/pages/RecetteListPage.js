import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardRecette from "../components/recettes/CardRecette";
import AddButton from "../components/buttons/AddButton";

const RecetteListPage = () => {
  const navigate = useNavigate();
  const [recettes, setRecettes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleAddRecette = () => {
    navigate("/recettes/add");
  };

  return (
    <div>
      <div className="text-xl">Mes recettes</div>
      <div className="flex justify-end">
        <AddButton text="Ajouter une recette" onCLick={handleAddRecette} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          recettes.map((recette) => (
            <CardRecette
              key={recette.id}
              id={recette.id}
              titre={recette.name}
              description={recette.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RecetteListPage;
