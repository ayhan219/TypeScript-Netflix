import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("Login Successfull!");
        navigate("/");
        window.location.reload();
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
      console.log(error);
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
          <h2>Login</h2>
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
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
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
            variant="contained"
            onClick={handleLogin}
            color="error"
            style={{ width: "100%", padding: "12px 0", marginTop: "8px" }}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;
