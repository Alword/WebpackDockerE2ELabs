import React from 'react'

export default function App() {
    const [data, setData] = React.useState([]);
    let url = "https://api.kanye.rest/";

    React.useEffect(() => {
        Request(setData);
        setInterval(() => {Request(setData);}, 10000);
    }, []);

    return <div>{data}</div>;
}

const Request = (setData) => {
    let url = "https://api.kanye.rest/";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data.quote);
        });
}
