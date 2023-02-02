import React, { useRef } from "react";

const Name = () => {
  const inputEl = useRef();

  return (
    <div>
      <label htmlFor="name">Nom</label>
      <p>
        <input ref={inputEl} type="text" name="name" id="name" />
      </p>
    </div>
  );
};

export default Name;
