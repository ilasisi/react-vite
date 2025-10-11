import { Child } from "./Child";

export const Parent = () => {
    return (
        <div className="border p-3">
            Parent
            <Child />
        </div>
    );
};
