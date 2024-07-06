import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="h-screen dark:bg-gray-800">
        <header>
          <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="https://flowbite.com" class="flex items-center">
                <img
                  src="/logo.png"
                  class="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  DishDash
                </span>
              </a>
              <div class="flex items-center lg:order-2">
                <a
                  href="/login"
                  class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Se connecter
                </a>
                <a
                  href="/signup"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Creer un compte
                </a>
              </div>
            </div>
          </nav>
        </header>

        <section class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                Bienvenue sur DishDash !
              </h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Simplifiez votre cuisine avec DishDash, l'application ultime
                pour organiser vos recettes et générer des listes de courses
                personnalisées !
              </p>
              <a
                href="/signup"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Creer un compte
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="/shopping-cart.png" alt="shopping cart picture" />
            </div>
          </div>
        </section>

        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
              Pourquoi DishDash ?
            </h2>
            <div class="grid grid-cols-4 gap-8 text-gray-500 sm:gap-12 md:grid-cols-4 lg:grid-cols-4 dark:text-gray-400">
              <p class="flex justify-center items-center">
                Gérez toutes vos recettes en un seul endroit
              </p>
              <p class="flex justify-center items-center">
                Créez des listes de courses en un clic
              </p>
              <p class="flex justify-center items-center">
                Optimisez vos courses
              </p>
              <p class="flex justify-center items-center">
                Un outil pratique et convivial
              </p>
            </div>
          </div>
        </section>
        <footer class="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
          <div class="mx-auto max-w-screen-xl">
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="#" class="hover:underline">
                  DishDash
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
