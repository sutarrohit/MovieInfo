import React from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

// INTERNAL IMPORT
import Style from "./Pagination.module.css";
import { Button } from "../index";

const Pagination = ({ themeMode, currentPage, setPage, totalPages }) => {
  const handlePrevious = () => {
    if (currentPage != 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage != totalPages) {
      setPage((nextPage) => nextPage + 1);
    }
  };

  if (totalPages == 0) return null;
  return (
    <div className={Style.Pagination}>
      <div className={Style.Pagination_box}>
        <Button
          btnName={<GrCaretPrevious />}
          btnFuction={handlePrevious}
          themeMode={themeMode}
          icon="Previous"
        />

        <p>{currentPage}</p>
        <Button
          btnName="Next"
          btnFuction={handleNext}
          themeMode={themeMode}
          icon={<GrCaretNext />}
        />
      </div>
    </div>
  );
};

export default Pagination;
