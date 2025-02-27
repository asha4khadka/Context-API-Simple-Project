import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const UserDetails = () => {
  const { user, data } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  if (user) {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70%",
          width: "50%",
          border: "1px solid #fff",
          backgroundColor: theme === "light" ? "black" : "white",
          color: theme === "light" ? "white" : "black",
          borderRadius: "5px",
          padding: "20px",
          marginTop: "60px",
        }}
      >
        <h1> User Details</h1>
        <p> User Id: {user.id}</p>
        <p> User Name: {user.name}</p>
        <p> User Email: {user.email}</p>
        <p> User Phone: {user.phone}</p>
        <button onClick={() => data(Math.floor(Math.random() * 10) + 1)}>
          Fetch User
        </button>
      </section>
    );
  } else {
    <span>User Not Found</span>;
  }
};

export default UserDetails;
