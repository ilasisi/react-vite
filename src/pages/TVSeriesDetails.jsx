import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const TVSeriesDetails = () => {
    const { id } = useParams();

    const { data, isLoading, error, fetchData } = useFetch(
        `tv/${id}?append_to_response=credits,keywords`
    );

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-dvh">
                <p>Loading ...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-dvh">
                <div className="flex flex-col items-center">
                    <p className="mb-6">{error}</p>
                    <div>
                        <button
                            onClick={fetchData}
                            className="bg-blue-600 px-3 text-white text-sm py-1 rounded-full"
                        >
                            Refetch
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <p>{data.original_name}</p>
        </div>
    );
};

export default TVSeriesDetails;
