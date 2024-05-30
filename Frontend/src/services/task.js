import axios from "axios";

export async function createAdminTask(data) {
  try {
    const response = await axios.post(
      "http://localhost:3000/task/admin",
      data,
      { withCredentials: true }
    );

    return response.data.message;
  } catch (error) {
    console.log(error);
    throw error.response.data.message;
  }
}

export async function submitStudentTask(taskDetail) {
  try {
    const { data, taskCategory } = taskDetail;
    const response = await axios.post(
      `http://localhost:3000/task/${taskCategory}`,
      data,
      { withCredentials: true }
    );

    return response.data.message;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
}

export async function getStudentTask(taskCategory) {
  try {
    const response = await axios.get(
      `http://localhost:3000/task/${taskCategory}`,
      { withCredentials: true }
    );

    console.log(response.data.tasks);
    return response.data.tasks;
  } catch (error) {
    console.log(error);
    return null;
  }
}
