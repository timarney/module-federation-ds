import React from "react";
import ReactDOM from "react-dom";

import { Button, FIP, PhaseBanner, Footer } from "@cdssnc/design-system-test/main";
import "./main.css";

const App = () => {
  return (
    <React.Fragment>
      <PhaseBanner>This is a prototype and won't submit data</PhaseBanner>
      <FIP
        href="https://www.google.ca"
        ariaLabel="this is an aria-label"
        src="images/sig-blk-en.svg"
        alt="this is alt-text"
      />
      <div className="gc-layout-container">
        <Button type="submit">Test</Button>
      </div>
      <div data-testid="footer"></div>
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
