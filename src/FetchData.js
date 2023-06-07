import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState([]);
  const Listname = data.map((item) => <li>{item.title}</li>);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Fetch Data</h1>
      <h2>{Listname}</h2>
    </div>
  );
}
export default FetchData;
