import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import User from "./User";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
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
        <div className="container">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>
              <User data={listOfUser} />
            </tbody>
          </table>
        </div>
      ) : (
        <h1 colSpan="4">{`Error ${error}`}</h1>
      )}
    </>
  );
}

export default UserList;
