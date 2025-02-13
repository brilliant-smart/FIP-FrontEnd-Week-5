import React from "react";
import State from "./State";
import FetchPosts from "./FectchPosts";
import FocusInput from "./FocusInput";
import UseFetch from "./UseFetch";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

  return (
    <div className="container text-center">
      <div className="container">
        <h2 className="mb-3">Week Five Deliverables</h2>
        <p className="mb-4">Below are the examples of the learning outcomes</p>

        <div className="row justify-content-center">
          {/* Example of useState */}
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Example of useState</h3>
                <State />
              </div>
            </div>
          </div>

          {/* Example of useEffect */}
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Example of useEffect</h3>
                <FetchPosts />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Example of useRef */}
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Example of useRef</h3>
                <FocusInput />
              </div>
            </div>
          </div>

          {/* Example of Custom Hook */}
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Example of Custom Hook</h3>
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
