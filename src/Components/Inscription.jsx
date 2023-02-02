import React from "react";
import FirstName from "./Input/FirstName";
import Name from "./Input/Name";
import Mail from "./Input/Mail";
import Passeword from "./Input/Passeword";
import Tel from "./Input/Tel";
import Nav from "./Nav";
import Button from "./Button/Button";

const Inscription = () => {
  return (
    <div>
      <header>
        <h1>Inscription</h1>
        <Nav />
      </header>
      <main>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (
              e.target[0].value &&
              e.target[1].value &&
              e.target[2].value &&
              e.target[3].value &&
              e.target[4].value
            ) {
              alert("Vous êtes connecter");
            } else {
              alert("Veuillez Reessayer");
            }
          }}
        >
          <Name />
          <FirstName />
          <Mail />
          <Tel />
          <Passeword />
          <Button />
        </form>
      </main>
    </div>
  );
};

export default Inscription;
