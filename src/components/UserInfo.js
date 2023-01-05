import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

function UserInfo() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.response.status);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error === null ? (
        <>
          <div
            className="card text-white bg-dark mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <h5 className="card-title">{user.username}</h5>
              <p className="card-text">
                {`Address: ${user.address.city}, ${user.address.street}, ${user.address.suite}`}
                <br />
                {`Contact: ${user.phone}`}
              </p>
            </div>
          </div>
          <Link to="/Users">
            <button type="button" class="btn btn-light mb-3">
              Get Users List
            </button>
          </Link>
          <Link to="/">
            <button type="button" class="btn btn-danger">
              Return to Home
            </button>
          </Link>
        </>
      ) : (
        <>
          <h1 className="mb-5">{`Error ${error}`}</h1>
          <Link to="/Users">
            <button type="button" class="btn btn-light mb-3">
              Get Users List
            </button>
          </Link>
          <Link to="/">
            <button type="button" class="btn btn-danger">
              Return to Home
            </button>
          </Link>

        </>
      )}
    </>
  );
}

export default UserInfo;
