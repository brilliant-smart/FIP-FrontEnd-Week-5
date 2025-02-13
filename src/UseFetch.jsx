import { useState, useEffect } from "react";

function UseFetch({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <p className="mb-3">Fetched Data</p>
      <ul className="list-group">
        {data.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseFetch;
