import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import { render, createCell } from "web-cell";

import { Hello } from "./Hello";
import { CellClock } from "./Clock";

render(
  <main>
    <Hello name="WebCell" />
    <CellClock />
  </main>
);
