import React, { useRef } from "react";

const Mail = () => {
  const inputEmail = useRef();
  return (
    <div>
      <label htmlFor="email">Email</label>
      <p>
        <input ref={inputEmail} type="email" name="email" id="email" required />
      </p>
    </div>
  );
};

export default Mail;
