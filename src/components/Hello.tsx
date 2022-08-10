import * as React from "react";
import "./Hello.css";
interface HelloProps {
  name: string;
  lang: string;
}
function Hello(props: HelloProps) {
  return (
    <div className="container">
      <div>
        <h1 className="title">hi my name is {props.name}</h1>
        <h2>my language is {props.lang}!</h2>
      </div>
    </div>
  );
}

export default Hello;
