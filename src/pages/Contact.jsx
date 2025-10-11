import { useReducer } from "react";
import { countReducer } from "../reducer/countReducer";

const Contact = () => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });

    return (
        <div>
            <p className="text-4xl">{state.count}</p>
            <div className="space-x-3">
                <button onClick={() => dispatch({ type: "increment" })}>
                    Increment
                </button>
                <button onClick={() => dispatch({ type: "decrement" })}>
                    Decrement
                </button>
                <button onClick={() => dispatch({ type: "reset" })}>
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Contact;
