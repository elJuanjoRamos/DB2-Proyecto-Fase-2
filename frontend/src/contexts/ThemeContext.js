import React, { useState } from "react";

import { THEMES } from "../theme/themes";

const initialState = {
  theme: THEMES.LIGHT,
  setTheme: (theme) => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const initialState = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : THEMES.LIGHT;
  };


  const [theme, _setTheme] = useState(initialState());

  const setTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
