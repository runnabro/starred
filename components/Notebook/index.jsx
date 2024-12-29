import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

import Jumping from "../components/Jumping";

const Notebook = () => {
  return (
    <main>
      <Jumping>hello</Jumping>
      <Sandpack />
    </main>
  );
};

export default Notebook;
