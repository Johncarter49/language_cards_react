import React from "react";
import data from "../data";
import react from "./assets/img/react.svg";
import Language from "./Language";

function Main() {
  // setLanguage(["data", "json"]);

  return (
    <>
      <img className="big-img" src={react} alt="react" />
      <div className="main-topic">
        <h1>Languages</h1>
        <div className="litte-bx">
          {data.map((datas, index) => {
            return <Language key={index} {...datas}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
