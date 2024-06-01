import axios from "axios";

export async function adminLogin(data) {
  try {
    const response = await axios.post(
      "http://localhost:3000/admin/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(response);
    return response.admin;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
}

export async function adminLogout() {
  try {
    await axios.post(
      "http://localhost:3000/admin/logout",
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

export async function getAdmin() {
  try {
    const response = await axios.get(
      "http://localhost:3000/admin/currentAdmin",
      {
        withCredentials: true,
      }
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
}
