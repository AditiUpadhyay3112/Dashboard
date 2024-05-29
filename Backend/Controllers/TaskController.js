import { AdminTask } from "../Modles/AdminTaskModel.js";
import { MasterclassTask } from "../Modles/MasterclassTaskModel.js";
import { SocialTask } from "../Modles/SocialTaskModel.js";
import { StudentTask } from "../Modles/StudentTaskModel.js";
import { WorkshopTask } from "../Modles/WorkshopTaskModel.js";
import { catchAsyncError } from "../Modles/catchAsyncError.js";
import ErrorHandler from "../Modles/error.js";

export const submitStudentTask = catchAsyncError(async (req, res, next) => {
  const { taskId, description, number } = req.body;
  const studentId = req.user._id;

  const findTask = await StudentTask.findOne({
    $and: [{ taskId }, { studentId }],
  });

  if (findTask) {
    return next(new ErrorHandler("Task already exists", 400));
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
});

export const submitSocialTask = catchAsyncError(async (req, res) => {
  const { taskId, description, shares, followers } = req.body;
  const studentId = req.user._id;

  const findTask = await SocialTask.findOne([{ taskId }, { studentId }]);

  if (findTask) {
    return next(new ErrorHandler("Task already exists", 400));
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
});

export const submitMasterclassTask = catchAsyncError(async (req, res) => {
  const { taskId, description, registrations } = req.body;
  const studentId = req.user._id;

  const findTask = await MasterclassTask.findOne([{ taskId }, { studentId }]);

  if (findTask) {
    return next(new ErrorHandler("Task already exists", 400));
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
});
submitStudentTask;

export const submitWorkshopTask = catchAsyncError(async (req, res) => {
  const { taskId, description, organisation } = req.body;
  const studentId = req.user._id;

  const findTask = await WorkshopTask.findOne([{ taskId }, { studentId }]);

  if (findTask) {
    return next(new ErrorHandler("Task already exists", 400));
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
});

export const createAdminTask = catchAsyncError(async (req, res) => {
  const { description } = req.body;

  await AdminTask.deleteMany({});

  const adminTask = await AdminTask.create({
    description,
  });

  return res
    .status(200)
    .json({ message: "Task created successfully", data: adminTask });
});
