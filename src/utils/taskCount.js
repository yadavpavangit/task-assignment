export const calculateTaskCount = (tasks) => {
  return {
    new: tasks.filter((t) => t.status === "new").length,
    active: tasks.filter((t) => t.status === "active").length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };
};
