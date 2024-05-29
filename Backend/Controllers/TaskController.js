import { AdminTask } from "../Modles/AdminTaskModel.js";
import { MasterclassTask } from "../Modles/MasterclassTaskModel.js";
import { SocialTask } from "../Modles/SocialTaskModel.js";
import { StudentTask } from "../Modles/StudentTaskModel.js";
import { WorkshopTask } from "../Modles/WorkshopTaskModel.js";
import { catchAsyncError } from "../Modles/catchAsyncError.js";
import ErrorHandler from "../Modles/error.js";

export const submitStudentTask = async (req, res) => {
  try {
    const { taskId, description, number } = req.body;
    const studentId = req.user._id;

    const findTask = await StudentTask.findOne({
      $and: [{ taskId }, { studentId }],
    });

    if (findTask) {
      return res.status(400).json({ error: "Task already submitted" });
    }

    const studentTask = await StudentTask.create({
      taskId,
      description,
      number,
      studentId,
    });

    return res
      .status(200)
      .json({ message: "Task Added Successfully", data: studentTask });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const submitSocialTask = async (req, res) => {
  try {
    const { taskId, description, shares, followers } = req.body;
    const studentId = req.user._id;

    const findTask = await SocialTask.findOne({
      $and: [{ taskId }, { studentId }],
    });

    if (findTask) {
      return res.status(400).json({ error: "Task already submitted" });
    }

    const socialTask = await SocialTask.create({
      taskId,
      description,
      shares,
      followers,
      studentId,
    });

    return res
      .status(200)
      .json({ message: "Task Added Successfully", data, socialTask });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const submitMasterclassTask = async (req, res) => {
  try {
    const { taskId, description, registrations } = req.body;
    const studentId = req.user._id;

    const findTask = await MasterclassTask.findOne({
      $and: [{ taskId }, { studentId }],
    });

    if (findTask) {
      return res.status(400).json({ error: "Task already submitted" });
    }

    const masterclassTask = await MasterclassTask.create({
      taskId,
      description,
      registrations,
      studentId,
    });

    return res
      .status(200)
      .json({ message: "Task Added Successfully", data, masterclassTask });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const submitWorkshopTask = async (req, res) => {
  try {
    const { taskId, description, organisation } = req.body;
    const studentId = req.user._id;

    const findTask = await WorkshopTask.findOne({
      $and: [{ taskId }, { studentId }],
    });

    if (findTask) {
      return res.status(400).json({ error: "Task already submitted" });
    }

    const workshopTask = await WorkshopTask.create({
      taskId,
      description,
      organisation,
      studentId,
    });

    return res
      .status(200)
      .json({ message: "Task Added Successfully", data, workshopTask });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const createAdminTask = async (req, res) => {
  const { description } = req.body;

  await AdminTask.deleteMany({});

  const adminTask = await AdminTask.create({
    description,
  });

  return res
    .status(200)
    .json({ message: "Task created successfully", data: adminTask });
};
