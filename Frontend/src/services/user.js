import axios from "axios";

export const loginStudent = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/api/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return response.user;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
};

export async function getCurrentStudent() {
  try {
    const response = await axios.get("http://localhost:3000/api/currentUser", {
      withCredentials: true,
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function logoutStudent() {
  try {
    await axios.post(
      "http://localhost:3000/api/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function registerStudent(data) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/register",
      data,
      { withCredentials: true }
    );

    console.log(response);
    return response.data.message;
  } catch (error) {
    throw error.response.data.error;
  }
}
