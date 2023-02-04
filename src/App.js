import { useWasm } from "./useWasm";

function App() {
  // const instance = useWasm('my-wasm.wasm')
  const {loaded, instance, error} = useWasm('my-wasm.wasm')
  return (
    <div className="App">
      {/* {instance && 
        instance.exports.addString('hello','wasm')
      } */}
      {loaded &&
        instance.exports.addString('hello','wasm')
      }
      {error && error.message}
    </div>
  );
}

export default App;

//HELP text for you:
/* 
  i've written this code in such way that it can be reusable for you
  here in app.js in place my "my-wasm.wasm" put your '.wasm' file you want to import

*/
