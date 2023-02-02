import React from "react";
import Button from "./Button/Button";
import Mail from "./Input/Mail";
import Nav from "./Nav";
const Newsletter = () => {
  return (
    <div>
      <header>
        <h1>Newsletter</h1>
        <Nav />
      </header>
      <main>
        <form action="">
          <Mail />
          <Button />
        </form>
      </main>
    </div>
  );
};

export default Newsletter;
