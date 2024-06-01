import axios from "axios";

export async function submitFeedback(feedback) {
  try {
    const response = await axios.post(
      "http://localhost:3000/feedback/create",
      feedback,
      { withCredentials: true }
    );

    return response.data.message;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
}

export async function getFeedbacks() {
  try {
    const response = await axios.get("http://localhost:3000/feedback/", {
      withCredentials: true,
    });
    return response.data.feedbacks;
  } catch (error) {
    console.log(error);
    return null;
  }
}
