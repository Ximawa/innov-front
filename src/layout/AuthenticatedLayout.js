import React from "react";
import NavBarLayout from "../components/NavBarLayout";
import SidebarLayout from "../components/SidebarLayout";

const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <NavBarLayout />
      <SidebarLayout />
      <div class="p-4 sm:ml-64 sm:h-full min-h-screen h-screen max-h-screen text-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
