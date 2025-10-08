import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const TVSeriesDetails = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useFetch(`tv/${id}`);

    if (isLoading) {
        return (
            <div>
                <p>Loading ...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
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
