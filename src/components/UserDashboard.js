import { useEffect, useState } from "react";
import { UserTable } from "./UserTable";

export const UserDashboard = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  };
  return <UserTable userData={userData} />;
};
