import React, { useState } from "react";

// INTERNAL IMPORT
import { Sidebar, AutorDetail } from "@/GlobalComponent";

const author = () => {
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

      <AutorDetail
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
        SetThemeMode={SetThemeMode}
      />
    </div>
  );
};

export default author;
