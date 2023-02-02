import React, { useRef } from "react";

const Passeword = () => {
  const inputMdp = useRef();
  return (
    <div>
      <label htmlFor="mdp">Mot de passe</label>
      <p>
        <input
          ref={inputMdp}
          type="password"
          name="mdp"
          id="mdp"
          required
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$"
        />
      </p>
    </div>
  );
};

export default Passeword;
