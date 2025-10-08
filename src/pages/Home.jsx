import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
    const {
        isLoading,
        data: posts,
        error,
        fetchData,
    } = useFetch("https://jsonplaceholder.typicode.com/posts");

    // const fetchPosts = () => {
    //     setIsLoading(true);

    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("Unable to fetch posts");
    //             }

    //             setError(null);

    //             return response.json();
    //         })
    //         .then((data) => setPosts(data))
    //         .catch((error) => console.log(error))
    //         .finally(() => setIsLoading(false));
    // };

    // const fetchAxiosAsyncPosts = async () => {
    //     setIsLoading(true);

    //     try {
    //         const response = await axios.get(
    //             "https://jsonplaceholder.typicode.com/posts"
    //         );

    //         setPosts(response.data);
    //     } catch (error) {
    //         setError(error.message);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const fetchAxiosPosts = () => {
    //     setIsLoading(true);

    //     axios("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => {
    //             setPosts(response.data);

    //             setError(null);
    //         })
    //         .catch((error) => setError(error.message))
    //         .finally(() => setIsLoading(false));
    // };

    if (isLoading) return <p>Loading ...</p>;

    if (error)
        return (
            <div>
                <p>{error}</p>
                <button onClick={fetchData}>Refetch</button>
            </div>
        );

    return (
        <div className="space-y-2">
            {posts.map((post, index) => (
                <div key={index}>
                    <Link to={`posts/${post.id}`} className="block text-left">
                        {post.id} - {post.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};
