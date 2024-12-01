import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

import Jumping from "../components/Jumping";

const Notebook = () => {
  return (
    <div>
      <Jumping>hello</Jumping>
      <Sandpack />
    </div>
  );
};

export default Notebook;
