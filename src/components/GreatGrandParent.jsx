import { useState } from "react";
import { NameContext } from "../contexts/nameContext";
import { GrandParent } from "./GrandParent";

export const GreatGrandParent = () => {
    const [name, setName] = useState("Musa");

    return (
        <NameContext value={{ name }}>
            <div className="border p-3">
                GreatGrandParent
                <button onClick={() => setName("James")}>Change name</button>
                <GrandParent />
            </div>
        </NameContext>
    );
};
