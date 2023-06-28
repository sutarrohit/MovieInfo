import React, { useState } from "react";

// INTENAL IMPORT
import { MovieDetail, Sidebar, Category } from "@/GlobalComponent";

const movie = () => {
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

      <MovieDetail
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
        SetThemeMode={SetThemeMode}
      />
    </div>
  );
};

export default movie;
