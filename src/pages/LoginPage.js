import React, { useState } from "react";
import LightDarkSwitch from "../components/buttons/LightDarkSwitch";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [pswd, setpswd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlepswdChange = (e) => setpswd(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, pswd }),
      });
      if (!response.ok) {
        setErrorMessage("Erreur dans la connexion. Veuillez réessayer.");
        throw new Error("Something went wrong");
      }
      if (response.status === 200) {
        setErrorMessage("");
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      setErrorMessage("Login ou mot de passe incorrect.");
    }
  };

  return (
    <section class="bg-white h-screen dark:bg-gray-800">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img class="w-8 h-8 mr-2 rounded" src="/logo.png" alt="logo" />
          DishDash
        </a>
        <div class="w-full bg-whiterounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connectez-vous à votre compte
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Login
                </label>
                <input
                  type="text"
                  name="login"
                  id="login"
                  value={login}
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required="true"
                  onChange={handleLoginChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={pswd}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                  onChange={handlepswdChange}
                />
              </div>
              <button
                type="submit"
                class="bg-green-600 w-full text-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Se connecter
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Pas encore de compte ?{" "}
                <a
                  href="/signup"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  S'inscrire
                </a>
              </p>
            </form>
            <div>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Changer de theme : <LightDarkSwitch />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
