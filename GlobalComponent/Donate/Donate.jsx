import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Donate.module.css";
const paymentLink = process.env.NEXT_PUBLIC_STRIPE_LINK;

const Donate = ({ setOpenDonate }) => {
  return (
    <div className={Style.Donate}>
      <div className={Style.Donate_notice}>
        <p>
          Please give your support |{" "}
          <Link target="blank" href={paymentLink}>
            <strong>Donate Now</strong>
          </Link>
        </p>
      </div>

      <span onClick={() => setOpenDonate(false)} className="icon">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2"
            y1="8.87868"
            x2="8.87868"
            y2="2"
            stroke="#FE6854"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="8.87868"
            y1="9"
            x2="2"
            y2="2.12132"
            stroke="#FE6854"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default Donate;
