import React from "react";

const IngredientCheck = ({ key, name, quantity, unit }) => {
  return (
    <div class="flex items-center ps-3">
      <input
        id={key}
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="vue-checkbox"
        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {name} {quantity} {unit}
      </label>
    </div>
  );
};

export default IngredientCheck;
