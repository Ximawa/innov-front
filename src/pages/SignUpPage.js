import React, { useState } from "react";
import LightDarkSwitch from "../components/buttons/LightDarkSwitch";

const SignUpPage = () => {
  const [login, setLogin] = useState("");
  const [pswd, setpswd] = useState("");
  const [confirmpswd, setConfirmpswd] = useState("");
  const [cgvChecked, setCgvChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlepswdChange = (e) => setpswd(e.target.value);
  const handleConfirmpswdChange = (e) => setConfirmpswd(e.target.value);
  const handleCheckboxChange = (e) => setCgvChecked(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cgvChecked) {
      setErrorMessage("Vous devez accepter les CGV.");
      return;
    }

    if (pswd !== confirmpswd) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, pswd }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setSuccessMessage("Compte créé avec succès.");
    } catch (error) {
      // Handle error (e.g., show error message)
      setErrorMessage("Erreur dans la creation du compte. Veuillez réessayer.");
    }
  };

  return (
    <section className="bg-white h-screen dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2 rounded" src="/logo.png" alt="logo" />
          DishDash
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Création d'un compte
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Votre pseudo
                </label>
                <input
                  type="login"
                  name="login"
                  id="login"
                  value={login}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="pseudo"
                  required={true}
                  onChange={handleLoginChange}
                />
              </div>
              <div>
                <label
                  htmlFor="pswd"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="pswd"
                  id="pswd"
                  value={pswd}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onChange={handlepswdChange}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-pswd"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirmation du mot de passe
                </label>
                <input
                  type="password"
                  name="confirm-pswd"
                  id="confirm-pswd"
                  value={confirmpswd}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onChange={handleConfirmpswdChange}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    J'accepte les{" "}
                    <a
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="/CGV_shopping.pdf"
                      target="_blank"
                    >
                      CGV
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-600 w-full text-white  hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Création d'un compte
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous avez déjà un compte?{" "}
                <a
                  href="/login"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Connectez-vous
                </a>
              </p>
            </form>
            <div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Changer de theme : <LightDarkSwitch />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
