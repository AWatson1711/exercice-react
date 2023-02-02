import React from "react";
import Button from "./Button/Button";
import FirstName from "./Input/FirstName";
import Mail from "./Input/Mail";
import Name from "./Input/Name";
import Passeword from "./Input/Passeword";
import Tel from "./Input/Tel";
import Nav from "./Nav";
const Contact = () => {
  return (
    <div>
      <header>
        <h1>Contact</h1>
        <Nav />
      </header>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value);
        }}
      >
        <Name />
        <FirstName />
        <Mail />
        <Passeword />
        <Tel />
        <Button />
      </form>
    </div>
  );
};

export default Contact;
