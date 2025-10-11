import { Parent } from "./Parent";

export const GrandParent = () => {
    return (
        <div className="border p-3">
            GrandParent
            <Parent />
        </div>
    );
};
