import React from "react";

function User({ data }) {
  return (
    <>
      {React.Children.toArray(
        data.map((el) => (
          <tr>
            <th scope="row">{el.id}</th>
            <td>{el.name}</td> <td>{el.username}</td> <td>{el.email}</td>
          </tr>
        ))
      )}
    </>
  );
}

export default User;
