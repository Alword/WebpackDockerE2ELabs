import React from 'react'

export default function App() {
    const [data, setData] = React.useState([]);
    let url = "https://api.kanye.rest/";
    //     let response = await fetch(url);

    React.useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data.quote);
          });
      }, []);
  
    return <div>{data}</div>;
}
