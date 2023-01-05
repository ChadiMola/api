import React from "react";
import { Link } from "react-router-dom";

function User({ el }) {
  return (
    <>
     
      <tr>
        <th scope="row">{el.id}</th>
        <td><Link to={`/User/${el.id}`} >{el.name}</Link></td> <td>{el.username}</td> <td>{el.email}</td>
      </tr>
      
    </>
  );
}

export default User;
