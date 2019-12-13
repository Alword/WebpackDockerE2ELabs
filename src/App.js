import React from 'react'

export default function App() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        Request(setData);
        setInterval(() => {Request(setData);}, 5000);
    }, []);

    return <div>{data}</div>;
}
const request = require('../src/module').Request;
const Request = (setData) => {
    request().then(response => response.json())
        .then(data => {
            setData(data.quote);
        });
}
