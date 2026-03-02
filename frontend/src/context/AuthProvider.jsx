import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API = "http://localhost:5000/api";

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem("token") || null,
    loading: true,
  });

  // Load profile if token exists
  useEffect(() => {
    const fetchProfile = async () => {
      if (!auth.token) {
        setAuth((prev) => ({ ...prev, loading: false }));
        return;
      }

      try {
        const { data } = await axios.get(`${API}/employee/profile`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        setAuth((prev) => ({
          ...prev,
          user: data,
          loading: false,
        }));
      } catch (error) {
        logout();
      }
    };

    fetchProfile();
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      setAuth({
        user: data.user,
        token: data.token,
        loading: false,
      });
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      user: null,
      token: null,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
