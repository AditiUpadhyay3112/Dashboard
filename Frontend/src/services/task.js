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
