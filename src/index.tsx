import "bulmaswatch/superhero/bulmaswatch.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import CodeEditor from "./components/code-editor";
import Preview from "./components/preview";
import bundle from "./bundler/index";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue={input} onChange={(value) => setInput(value!)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
