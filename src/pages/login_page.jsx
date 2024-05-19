import React, { useEffect } from "react";
import { useDarkMode } from "../utils/check_dark_mode";
import { LogoComponent } from "../components/logo";
import { LoginBoxComponent } from "../components/login_box.component";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center bg-white dark:bg-black dark:text-red-50 text-black">
      <LogoComponent />
      {/* login box */}
      <LoginBoxComponent />
    </div>
  );
};

export default LoginPage;
