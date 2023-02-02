import React, { useRef } from "react";

const File = () => {
  const inputFile = useRef();
  return (
    <div>
      <label htmlFor="file">Votre Fichier</label>
      <p>
        <input ref={inputFile} type="file" name="file" id="file" />
      </p>
    </div>
  );
};

export default File;
