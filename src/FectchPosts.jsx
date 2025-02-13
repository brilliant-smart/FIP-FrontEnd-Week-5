import React, { useState, useEffect } from "react";

function FetchPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2 className="mb-3">Posts</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPosts;
