import {
  Box,
  Stack,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";

import TextField from "./component/form/TextField";
import { useState } from "react";
import Button from "./component/form/Button";
import { useNavigate } from "react-router-dom";
import hide from "../assets/hide.svg";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../store";
import logo from "../assets/loginLogo.svg";
import bg from "../assets/bg-image.svg";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { setToken, token } = useAuthStore();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    loginMutation.mutate();
  }
  const loginMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        "https://stagingapi.iprescribe.online/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      );
      return response.data.data;
    },
    onSuccess: (user) => {
      console.log(user);
      setToken(user.token);
      navigate("/dashboard");
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const { isPending } = loginMutation;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh", 
        display:  "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        backgroundImage: `url(${bg})`,
      }}
    >
      <Stack
        spacing="16px"
        sx={{
          zIndex: 1,
          backgroundColor: "white",
          maxWidth: "480px",
          width: "100%",
          height: isMobile? "100vh":"auto",
          paddingX: "32px",
          paddingY: "20px",
          gap: "36px",
          borderRadius: isMobile?"0px":"20px",
        }}
      >
        <Stack>
          <Box sx={{ width: "116px", height: "100px", margin: "auto" }}>
            <img src={logo} alt="Login Icon" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "34px",
            }}
          >
            <Typography
              sx={{
                color: "#1A1C1E",
                fontSize: "20px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Login to iPrescribe Admin
            </Typography>
            <Typography
              sx={{
                color: "#6C7278",
                fontWeight: "400",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Provide the required details to login
            </Typography>
          </Box>
        </Stack>
        <Stack
          component="form"
          className="login-container"
          onSubmit={handleSubmit}
          sx={{marginTop:"34px"}}
        >
          <Stack width={"100%"} spacing={"15px"}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              labelText="Email or Phone"
              placeholder="e.g admin@careoneclinics.com"

            />
            <TextField
              labelText="Password"
              placeholder="**************"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ pr: "8px" }}>
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="small"
                    >
                      <img
                        src={
                          showPassword
                            ? "/icons/visibility-off.svg"
                            : "/icons/visibility-on.svg"
                        }
                        alt={showPassword ? "Hide password" : "Show password"}
                        width={20}
                        height={20}
                        style={{ display: "block" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start" sx={{ pl: "8px" }}>
                    <img src={hide} alt="Hide" />
                  </InputAdornment>
                ),
              }}
            />

            <Typography
              sx={{
                color: "#6C7278",
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "right",
              }}
            >
              Forgot password?
            </Typography>
          </Stack>

          <Button
            loading={isPending}
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.17px",
              backgroundColor: "#283C85",
              borderRadius: "9.95px",
              marginTop: "34px",
            }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
