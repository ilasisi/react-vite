import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
    const params = useParams();

    const { data, isLoading, error, fetchData } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (isLoading) return <p>Loading ...</p>;

    if (error)
        return (
            <div>
                <p>{error}</p>
                <button onClick={fetchData}>Refetch</button>
            </div>
        );

    return (
        <div>
            <p>ID: {data.id}</p>
            <p>Title: {data.title}</p>
        </div>
    );
};

export default PostDetails;
