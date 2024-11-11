import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type User = {
  username: string;
  email: string;
  password: string;
  handleSignup: void;
};
const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );
      if (response.status === 201) {
        toast.success("Signup Successfull");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };
  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-center cover"
      style={{
        backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fit/w_828,h_466,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-[90%] max-w-md p-8 bg-black bg-opacity-70 rounded-md">
        <div className="w-full mb-6 text-4xl font-bold text-center text-white">
          <h2>Sign Up</h2>
        </div>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": { mb: 3, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            variant="filled"
            InputLabelProps={{ style: { color: "#e5e5e5" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            InputLabelProps={{ style: { color: "#e5e5e5" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="filled"
            InputLabelProps={{ style: { color: "#e5e5e5" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <Button
            onClick={() => handleSignup()}
            variant="contained"
            color="error"
            style={{ width: "100%", padding: "12px 0", marginTop: "8px" }}
          >
            Sign Up
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
