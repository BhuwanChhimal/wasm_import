import React, {StrictMode} from "react";

import { useWasm } from "./useWasm";

const App = () => {
  const { loaded, instance, error } = useWasm("tflite.wasm");
  return (
    <div>
      {loaded && instance.exports.addString("hello", "wasm")}
      {error && error.message}
    </div>
  );
};
export default App;

//HELP text for you:
/* 
  i've written this code in such way that it can be reusable for you
  here in app.js in place my "my-wasm.wasm" put your '.wasm' file you want to import

*/
