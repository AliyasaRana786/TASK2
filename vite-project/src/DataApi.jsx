import { useEffect, useState } from "react";
import './DataApi.css';

export default function DataApi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const datafetch = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const responsejson = await response.json();
            setData(responsejson);
        };
        datafetch();
    }, []);

    return (
        <div className="container">
            {data.map((api) => {
                return (
                    <div key={api.id} className="api-item">
                        <p><b>Name:</b> {api.name}</p>
                        <p><b>Username:</b> {api.username}</p>
                        <p><b>Email:</b> {api.email}</p>
                    </div>
                );
            })}
        </div>
    );
}
