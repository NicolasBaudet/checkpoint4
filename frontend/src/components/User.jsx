import React, { useEffect, useState } from "react";
import api from "../services/api";
import UserList from "./UserList";

function User() {
  const [user, setUser] = useState([]);
  const getAllUsers = () => {
    api
      .get("/user")
      .then((res) => setUser(res.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const userMap = user.map((element) => <UserList element={element} />);

  return <div>{userMap}</div>;
}

export default User;
