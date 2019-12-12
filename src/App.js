import React from 'react'

export default function App() {
    const [data, setData] = React.useState([]);
    let url = "https://api.kanye.rest/";

    React.useEffect(() => {
        Request(setData);
        setInterval(() => {Request(setData);}, 5000);
    }, []);

    return <div>{data}</div>;
}
const ft = require('../src/module').Request;
const Request = (setData) => {
    ft().then(response => response.json())
        .then(data => {
            setData(data.quote);
        });
}
