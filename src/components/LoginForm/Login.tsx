import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./Login.css";

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.email) {
      alert("Please fill in all fields");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));

    navigate("/second-page");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <TextField
        required
        id="standard-basic"
        label="Name"
        variant="standard"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <TextField
        required
        id="outlined-number"
        label="Phone Number"
        type="number"
        name="phoneNumber"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <br />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        name="email"
        autoComplete="current-password"
        variant="standard"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
