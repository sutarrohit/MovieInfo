import React from "react";

import Style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={Style.Loader}>
      <div className={Style.hourglassBackground}>
        <div className={Style.hourglassContainer}>
          <div className={Style.hourglassCurves}></div>
          <div className={Style.hourglassCapTop}></div>
          <div className={Style.hourglassGlassTop}></div>
          <div className={Style.hourglassSand}></div>
          <div className={Style.hourglassSandStream}></div>
          <div className={Style.hourglassCapBottom}></div>
          <div className={Style.hourglassGlass}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
