import React from "react";
import State from "./State";
import FetchPosts from "./FectchPosts";
import FocusInput from "./FocusInput";
import UseFetch from "./UseFetch";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Counter Example</h5>
                <State />
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Fetch Posts</h5>
                <FetchPosts />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Focus Input</h5>
                <FocusInput />
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">UseFetch Hook</h5>
                <UseFetch url={url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
