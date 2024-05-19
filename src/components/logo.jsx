import { useDarkMode } from "../utils/check_dark_mode";

export const LogoComponent = () => {
  let isDarkMode = useDarkMode();
  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      {console.log(isDarkMode)}
      {isDarkMode ? (
        <img src="src/assets/logo-white.png" alt="" className="w-full" />
      ) : (
        <img src="src/assets/logo-black.png" alt="" className="w-full" />
      )}
    </div>
  );
};
