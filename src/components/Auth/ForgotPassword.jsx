import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { requestPasswordResetAsync } from "../../redux/authSlice";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, error, passwordResetRequested } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestPasswordResetAsync(email));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        {passwordResetRequested ? (
          <Typography sx={{ mt: 2 }}>
            Password reset email sent. Please check your inbox.
          </Typography>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </Button>
            {error && (
              <Typography color="error" align="center">
                {error}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default ForgotPassword;
