import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log("Profile Data:", user);

  if (user) {
    return <span style={{ fontWeight: "bold" }}>{user.name}</span>;
  } else {
    return <span>Login</span>;
  }
};
export default Profile;
