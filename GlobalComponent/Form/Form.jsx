import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AiOutlineClose } from "react-icons/ai";

// INTERNAL IMPORT
import Style from "./Form.module.css";

const Form = ({ themeMode, setFormModal }) => {
  const formsKey = process.env.NEXT_PUBLIC_FORMSKEY;

  const [state, handleSubmit] = useForm(formsKey);
  const [closeNotify, setCloseNotify] = useState(false);
  if (state.succeeded) {
    return (
      <div className={` ${Style.alert} ${closeNotify ? `${Style.show}` : ""}`}>
        <span className={Style.closebtn} onClick={() => setCloseNotify(true)}>
          &times;
        </span>
        <strong>Congralation!</strong> You have successfully submited your
        request
      </div>
    );
  }
  return (
    <section
      className={`${Style.section_form} ${
        themeMode ? "darkMode" : "lightMode"
      } `}
    >
      <button
        className={` ${themeMode ? "darkMode  " : "lightMode"} `}
        onClick={() => setFormModal(false)}
      >
        <AiOutlineClose />
      </button>
      <form onSubmit={handleSubmit} className={Style.feed_form}>
        <h1>Contact Us</h1>
        <input
          className={` ${themeMode ? " lightMode   " : "darkMode"} `}
          id="email"
          type="email"
          name="email"
          placeholder="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          className={` ${themeMode ? "lightMode  " : " darkMode "} `}
          id="name"
          type="name"
          name="name"
          placeholder="name"
        />
        <input
          className={` ${themeMode ? "lightMode   " : "darkMode"} `}
          id="phone"
          type="phone"
          name="phone"
          placeholder="phone"
        />
        <textarea
          id="message"
          name="message"
          placeholder="message"
          cols="30"
          rows="50"
          className={` ${themeMode ? "lightMode  " : "darkMode"} `}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className={Style.button_submit}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
