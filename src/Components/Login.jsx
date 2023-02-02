import React from "react";
import Button from "./Button/Button";
import Mail from "./Input/Mail";
import Passeword from "./Input/Passeword";
import Nav from "./Nav";

const Login = () => {
  return (
    <div>
      <header>
        <h1>Login</h1>
        <Nav />
      </header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (e.target[0].value && e.target[1].value) {
              alert("Vous êtes connecter");
            } else {
              alert("Veuillez Reessayer");
            }
          }}
        >
          <Mail />
          <Passeword />
          <Button />
        </form>
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
