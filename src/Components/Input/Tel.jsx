import React, { useRef } from "react";

const Tel = () => {
  const inputTel = useRef();
  return (
    <div>
      <label htmlFor="tel">Telephone</label>
      <p>
        <input
          ref={inputTel}
          type="text"
          name="tel"
          id="tel"
          required
          pattern="^(0|\\+33|0033)[1-9][0-9]{8}$"
        />
      </p>
    </div>
  );
};

export default Tel;
