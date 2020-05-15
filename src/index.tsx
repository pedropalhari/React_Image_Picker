import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
document.body.style.margin = "0px";
render(<App />, rootElement);
