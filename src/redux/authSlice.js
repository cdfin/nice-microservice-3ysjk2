import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../services/authService";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await authService.login(email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerAsync = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const user = await authService.register(name, email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyEmailAsync = createAsyncThunk(
  "auth/verifyEmail",
  async (token, { rejectWithValue }) => {
    try {
      const response = await authService.verifyEmail(token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateUserProfileAsync = createAsyncThunk(
  "auth/updateUserProfile",
  async ({ userId, profileData }, { rejectWithValue }) => {
    try {
      const updatedUser = await authService.updateUserProfile(
        userId,
        profileData
      );
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: authService.getCurrentUser(),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      authService.logout();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(verifyEmailAsync.fulfilled, (state, action) => {
        state.user = { ...state.user, emailVerified: true };
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(requestPasswordResetAsync.fulfilled, (state) => {
        state.passwordResetRequested = true;
      })
      .addCase(resetPasswordAsync.fulfilled, (state) => {
        state.passwordResetSuccessful = true;
      })
      .addCase(updateUserProfileAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUserRoleAsync.fulfilled, (state, action) => {
        state.user = { ...state.user, role: action.payload.role };
      });
  },
});
export const requestPasswordResetAsync = createAsyncThunk(
  "auth/requestPasswordReset",
  async (email, { rejectWithValue }) => {
    try {
      const response = await authService.requestPasswordReset(email);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPasswordAsync = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, newPassword }, { rejectWithValue }) => {
    try {
      const response = await authService.resetPassword(token, newPassword);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getUserRoleAsync = createAsyncThunk(
  "auth/getUserRole",
  async (userId, { rejectWithValue }) => {
    try {
      const roleData = await authService.getUserRole(userId);
      return roleData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
