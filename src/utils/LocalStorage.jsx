// ---------> EMPLOYEES <----------

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",

    taskCount: {
      new: 1,
      active: 1,
      completed: 1,
    },

    tasks: [
      {
        id: 101,
        title: "Update website",
        description: "Revamp the homepage design",
        date: "2024-10-12",
        category: "Design",
        status: "new",
      },
      {
        id: 102,
        title: "Client meeting",
        description: "Discuss project requirements",
        date: "2024-10-10",
        category: "Meeting",
        status: "completed",
      },
      {
        id: 103,
        title: "Fix bugs",
        description: "Resolve bugs reported in issue tracker",
        date: "2024-10-14",
        category: "Development",
        status: "active",
      },
    ],
  },

  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      new: 0,
      active: 1,
      completed: 1,
    },

    tasks: [
      {
        id: 201,
        title: "Database optimization",
        description: "Optimize queries",
        date: "2024-10-11",
        category: "Database",
        status: "active",
      },
      {
        id: 202,
        title: "Design new feature",
        description: "Create mockups",
        date: "2024-10-09",
        category: "Design",
        status: "completed",
      },
    ],
  },

  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      new: 1,
      active: 1,
      completed: 1,
    },

    tasks: [
      {
        id: 301,
        title: "Prepare presentation",
        description: "Prepare slides",
        date: "2024-10-13",
        category: "Presentation",
        status: "new",
      },
      {
        id: 302,
        title: "Code review",
        description: "Review the codebase",
        date: "2024-10-12",
        category: "Development",
        status: "active",
      },
      {
        id: 303,
        title: "Testing",
        description: "Test the latest build",
        date: "2024-10-08",
        category: "QA",
        status: "completed",
      },
    ],
  },
];

// ------> ADMIN <-------
const admin = [
  {
    id: 1,
    name: "Pavan",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    admin: JSON.parse(localStorage.getItem("admin")) || [],
  };
};
