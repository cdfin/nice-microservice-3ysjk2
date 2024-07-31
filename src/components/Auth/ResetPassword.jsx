import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { resetPasswordAsync } from "../../redux/authSlice";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error, passwordResetSuccessful } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    dispatch(resetPasswordAsync({ token, newPassword: password }))
      .unwrap()
      .then(() => {
        setTimeout(() => history.push("/login"), 3000);
      });
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
          Reset Password
        </Typography>
        {passwordResetSuccessful ? (
          <Typography sx={{ mt: 2 }}>
            Password reset successful. Redirecting to login...
          </Typography>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;
