import { Outlet } from "react-router";

const CompanyHeader = () => {
    return (
        <div>
            <p className="text-3xl font-bold mb-3">NotZero</p>
            <Outlet />
        </div>
    );
};

export default CompanyHeader;
