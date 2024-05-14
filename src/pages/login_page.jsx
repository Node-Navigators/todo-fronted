import React, { useEffect } from "react";
import { useDarkMode } from "../utils/check_dark_mode";

const LoginPage = () => {
  let isDarkMode = useDarkMode();
  return (
    <div className="w-screen h-screen flex items-center bg-white dark:bg-black dark:text-red-50 text-black">
      <div className="w-1/2 h-full">
        {console.log(isDarkMode)}
        {isDarkMode ? (
          <img src="src/assets/logo-white.png" alt="" className="w-full" />
        ) : (
          <img src="src/assets/logo-black.png" alt="" className="w-full" />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
