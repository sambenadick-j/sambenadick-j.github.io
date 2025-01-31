import React, { useState, useEffect } from "react";
import useFetcher from "./useFetcher";

function Apicall() {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    let hookResponse = useFetcher('https://jsonplaceholder.typicode.com/todos/1')
    console.log(hookResponse)
    return(
        <div>
            <h2>API called</h2>
        </div>
    )
}
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //         if (response.ok) {
    //             const result = await response.json();
    //             setData(result);
    //         } else {
    //             setError("Network response was not ok");
    //         }
    //         setLoading(false);
    //     };

    //     fetchData();
    // }, []);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }
export default Apicall;
