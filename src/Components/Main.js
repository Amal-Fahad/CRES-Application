import React from "react";
import DataList from "./DataList";
import LoginForm from "./LoginForm";
import { useState } from "react";

const Main = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not match");
    }
  };

  const LogOut = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div className="main">
      {user.email !== "" ? (
        <DataList LogOut={LogOut} />
      ) : (
        <LoginForm login={Login} error={error} />
      )}
    </div>
  );
};

export default Main;
