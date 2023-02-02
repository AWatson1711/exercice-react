import React, { useRef } from "react";

const FirstName = () => {
  const inputFirstName = useRef();
  return (
    <div>
      <label htmlFor="firstName">Prénom</label>
      <p>
        <input
          ref={inputFirstName}
          type="text"
          name="firstName"
          id="firstName"
        />
      </p>
    </div>
  );
};

export default FirstName;
