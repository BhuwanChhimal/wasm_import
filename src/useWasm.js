import { useEffect, useState } from "react";
import { useAsBind } from "use-as-bind";

export const useWasm = (fileName, imports) => {
        const [state, setState] = useState({
            loaded: false,
            instance: null,
            error: null, //-->error handling
        });
        useEffect(() => {
            const abortController = new AbortController()
            const fetchWasm = async() => {
                try {
                    const wasm = await fetch(
                        fileName, { signal: abortController.signal }
                    );
                    if (!wasm.ok) {
                        throw new Error("failed to fetch resource ${filename")
                    }
                    const instance = await AsBind.instantiate(wasm, imports);
                    if (!abortController.signal.aborted) {
                        setState({ instance, loaded: true, error: null });
                    }
                } catch (e) {
                    if (!abortController.signal.aborted) {
                        setState({...state, error: e });
                    }
                }
            }
            fetchWasm();
            return function cleanup() {
                abortController.abort();
            };
        }, [fileName, imports]);
        return state;
    }
    //1st step: after doing this make changes in the app.js store the useWasm in 
    //a instance variable then 2nd step is to update the api so we can dynamically
    //load different wasm file