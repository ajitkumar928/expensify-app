import { useState } from "react";

export const UserTable = ({ userData }) => {
  console.log(userData);
  const [showDetails, setShowDetails] = useState(true);
  const toggleDetails = () => setShowDetails(!showDetails);
  const displayUserData = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <h4>ID</h4>
            </th>
            <th>
              <h4>Name</h4>
            </th>
            <th>
              <h4>Email</h4>
            </th>
            <th>
              <h4>Company Name</h4>
            </th>
            {showDetails && (
              <th>
                <h4>Address</h4>
              </th>
            )}
            {showDetails && (
              <th>
                <h4>Phone</h4>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 &&
            userData.map(({ id, name, email, company, address, phone }) => {
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{company.name}</td>
                  {showDetails && (
                    <td>{`${address.city}, ${address.suite}, ${address.street}`}</td>
                  )}
                  {showDetails && <td>{phone}</td>}
                  <td>
                    <button className="view" onClick={toggleDetails}>
                      View Other details
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  };
  return (
    <div>
      <h2 className="title">User Table</h2>
      <div>{displayUserData()}</div>
    </div>
  );
};
