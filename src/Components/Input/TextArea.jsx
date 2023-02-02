import React from "react";

const TextArea = () => {
  return (
    <div>
      <label htmlFor="message">Message</label>
      <div>
        <textarea
          id="message"
          name="message"
          maxLength="200"
          minLength="20"
          required
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
