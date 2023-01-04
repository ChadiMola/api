import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [listOfUSer , setListOfUSer ] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUSer(response.data);
      })
      .catch((error) => {
        setError(error.status);
      });
  }, []);
  return (
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {error === null ? (
            React.Children.toArray(
                listOfUSer.map((el) => (
                <tr>
                  <th scope="row">{el.id}</th>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                </tr>
              ))
            )
          ) : (
            <h1>Error {error}</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
