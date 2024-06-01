import { Feedback } from "../Modles/FeedbackModel.js";

export const submitFeedback = async (req, res) => {
  try {
    const { feedback } = req.body;
    const { name } = req.user;

    if (!feedback)
      return res.status(400).json({ error: "Feedback can't be empty" });

    const createFeedback = await Feedback.create({
      name,
      feedback,
    });

    return res
      .status(200)
      .json({ message: "Feedback submitted successfully", createFeedback });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    console.log(feedbacks);

    return res.status(200).json({ feedbacks });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};
