import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table/Table";
import { Button } from "@mui/material";
import CheckboxTree from "../components/CheckboxTree/CheckboxTree";
import "./SecondPage.css";

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userData");

  if (!user) {
    window.location.href = "https://give-me-organic-assignment.netlify.app/";
    alert("Please fill the details to access this page");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <div className="data-container__main">
      <div className="data-container__btn-container">
        <Button onClick={handleLogout} variant="contained">
          Logout
        </Button>
      </div>
      <Table />
      <CheckboxTree />
    </div>
  );
};

export default SecondPage;
