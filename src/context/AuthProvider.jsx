import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    currentUser: null,
    employees: [],
    admin: [],
    loading: true,
  });

  const addTaskToEmployee = (employeeId, task) => {
    setAuth((prev) => {
      const updatedEmployees = prev.employees.map((emp) =>
        emp.id === employeeId ? { ...emp, tasks: [...emp.tasks, task] } : emp,
      );

      return { ...prev, employees: updatedEmployees };
    });
  };

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setAuth({
      user: storedUser?.role || null,
      currentUser: storedUser || null,
      employees: employees || [],
      admin: admin || [],
      loading: false,
    });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("employees", JSON.stringify(auth.employees));
  // }, [auth.employees]);

  const login = (email, password) => {
    const admin = auth.admin.find(
      (e) => e.email === email && e.password === password,
    );
    if (admin) {
      const userData = {
        role: "admin",
        id: admin.id,
        name: admin.name,
      };
      setAuth((prev) => ({
        ...prev,
        user: "admin",
        currentUser: userData,
      }));
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      return;
    }

    const employee = auth.employees.find(
      (e) => e.email === email && e.password === password,
    );

    if (employee) {
      const userData = {
        role: "employee",
        id: employee.id,
        name: employee.firstName,
      };

      setAuth((prev) => ({
        ...prev,
        user: "employee",
        currentUser: userData,
      }));
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setAuth((prev) => ({
      ...prev,
      user: null,
    }));
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ ...auth, addTaskToEmployee, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
