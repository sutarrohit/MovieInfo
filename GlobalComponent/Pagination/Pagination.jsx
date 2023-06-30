import React from "react";

// INTERNAL IMPORT
import Style from "./Pagination.module.css";
import { Button } from "../index";

const Pagination = ({ themeMode }) => {
  return (
    <div className={Style.Pagination}>
      <div className={Style.Pagination_box}>
        <Button
          btnName="Previous"
          btnFuction={themeMode}
          themeMode={themeMode}
          icon={"icon"}
        />
        <p>1</p>
        <Button
          btnName="Next"
          btnFuction={themeMode}
          themeMode={themeMode}
          icon={"icon"}
        />
      </div>
    </div>
  );
};

export default Pagination;
