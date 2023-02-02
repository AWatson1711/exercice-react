import React from "react";
import Nav from "./Nav";
import File from "./Input/File";
import Button from "./Button/Button";
import Name from "./Input/Name";
import FirstName from "./Input/FirstName";

const UploadFile = () => {
  return (
    <div>
      <header>
        <h1>UploadFile</h1>
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
        <File />
        <Button />
      </form>
    </div>
  );
};

export default UploadFile;
