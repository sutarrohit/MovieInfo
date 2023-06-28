import React, { useState } from "react";

// INTERNAL IMPORT
import { Category, Sidebar } from "../GlobalComponent/index";

const Home = () => {
  // STATE VARIABLES
  const [themeMode, SetThemeMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={` ${"container"}  ${themeMode ? "darkMode" : "lightMode"}`}>
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
        SetThemeMode={SetThemeMode}
      />

      <Category
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
        SetThemeMode={SetThemeMode}
      />
    </div>
  );
};

export default Home;
