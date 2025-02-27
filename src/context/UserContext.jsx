import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const data = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((response) => response.json());
    console.log(response);
    setUser(response);
  };

  useEffect(() => {
    data(1);
  }, []);

  return (
    <UserContext.Provider value={{ user, data }}>
      {children}
    </UserContext.Provider>
  );
};
