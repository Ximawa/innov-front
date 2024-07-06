import React from "react";
import SelectInput from "./SelectInput";
import RedButton from "../buttons/RedButton";

const Ingredient = ({
  id,
  name,
  quantity,
  unit,
  rayon,
  rayonList,
  onChangeName,
  onChangeQuantity,
  onChangeUnit,
  onChangeRayon,
  onClick,
}) => {
  const convertedRayonList = rayonList.map((item) => ({
    value: item.id.toString(),
    label: item.name,
  }));

  return (
    <div className="grid  gap-4 lg:grid-cols-10">
      <div class="mb-5 col-span-2">
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
      <div class="mb-5 col-span-2">
        <label
          for="quantity"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="quantite"
          onChange={onChangeQuantity}
        />
      </div>
      <div class="mb-5 col-span-2">
        <label
          for="unit"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <input
          type="text"
          id="unit"
          value={unit}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Unite"
          onChange={onChangeUnit}
        />
      </div>
      <div class="mb-5 col-span-2">
        <SelectInput
          value={rayon}
          titre="Rayon"
          options={convertedRayonList}
          onChange={onChangeRayon}
        />
      </div>
      <div></div>
      <div class="mb-5 pt-2">
        <RedButton text="X" onClick={() => onClick(id)} />
      </div>
    </div>
  );
};

export default Ingredient;
