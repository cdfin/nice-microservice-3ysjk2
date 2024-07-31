import { API_BASE_URL } from "../config";

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
export const updateUserProfile = async (userId, profileData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user profile");
    }

    return await response.json();
  } catch (error) {
    console.error("Update user profile error:", error);
    throw error;
  }
};
export const register = async (name, email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data.user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    // In a real application, you'd want to decode the JWT here
    // and return the user information stored in it
    return { id: 1, name: "John Doe", email: "john@example.com" };
  } catch (error) {
    console.error("Get current user error:", error);
    return null;
  }
};

// Add this function to authService.js
export const verifyEmail = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error("Email verification failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Email verification error:", error);
    throw error;
  }
};
export const requestPasswordReset = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/request-password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Password reset request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Password reset request error:", error);
    throw error;
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword }),
    });

    if (!response.ok) {
      throw new Error("Password reset failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Password reset error:", error);
    throw error;
  }
};
export const getUserRole = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/role`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user role");
    }

    return await response.json();
  } catch (error) {
    console.error("Get user role error:", error);
    throw error;
  }
};
