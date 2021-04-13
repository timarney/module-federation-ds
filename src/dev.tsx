import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/forms/Button/Button";
import { FIP } from "./components/forms/FIP/FIP";

import './css/base.css';

const App = () => {
  return <div style={{margin:20}}>
    <FIP href="http://canada.ca" ariaLabel="test" src="./sig-blk-en.svg"
    alt="this is alt-text" />
    <Button type="submit">Test</Button>
    </div>;
};

ReactDOM.render(<App />, document.getElementById("main"));
