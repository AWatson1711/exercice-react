import React from "react";
import Nav from "./Nav";
import Name from "./Input/Name";
import Button from "./Button/Button";
import FirstName from "./Input/FirstName";
import TextArea from "./Input/TextArea";

const Comment = () => {
  return (
    <div>
      <header>
        <h1>Comments</h1>
        <Nav />
      </header>
      <main>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target[0].value;
            const firstName = e.target[1].value;
            const message = e.target[2].value;
            let error;
            if (!name) {
              error = "champ nom vide";
            }
            if (!firstName) {
              error = "champ prenom vide";
            }
            if (!message) {
              error = "champ message vide";
            } else if (!message.match(/^[a-zA-Z1-9]{20,200}$/)) {
              error = "champ message non conforme, min 20 max 200, uniquement";
            }
          }}
        >
          <Name />
          <FirstName />
          <TextArea />
          <Button />
        </form>
      </main>
    </div>
  );
};

export default Comment;
