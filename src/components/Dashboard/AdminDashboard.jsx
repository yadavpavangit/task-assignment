import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard() {
  return (
    <section>
      <Header />
      <CreateTask />
      <AllTask />
    </section>
  );
}

export default AdminDashboard;
