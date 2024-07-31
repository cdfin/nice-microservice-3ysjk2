import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Typography, Container, Box, CircularProgress } from "@mui/material";
import { verifyEmailAsync } from "../../redux/authSlice";

function EmailVerification() {
  const { token } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(verifyEmailAsync(token))
        .unwrap()
        .then(() => {
          setTimeout(() => history.push("/"), 3000);
        });
    }
  }, [token, dispatch, history]);

  if (loading) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, textAlign: "center" }}>
        {error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Typography>
            Email verified successfully! Redirecting to dashboard...
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default EmailVerification;
