import { AdminTask } from "../Modles/AdminTaskModel.js";
import { MasterclassTask } from "../Modles/MasterclassTaskModel.js";
import { SocialTask } from "../Modles/SocialTaskModel.js";
import { StudentTask } from "../Modles/StudentTaskModel.js";
import { User } from "../Modles/UserModel.js";
import { WorkshopTask } from "../Modles/WorkshopTaskModel.js";

export const submitStudentTask = async (req, res) => {
  try {
    const { description, number } = req.body;
    const studentId = req.user._id;

    const task = await AdminTask.findOne({});

    if (!task)
      return res.status(400).json({ error: "No Admin Task is present" });

    const taskId = task._id;

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
      studentName: req.user.name,
    });

    const findUser = await User.findById(req.user._id);

    await User.findByIdAndUpdate(findUser._id, {
      studentPoints: findUser.studentPoints + Number(number),
    });

    return res
      .status(200)
      .json({ message: "Task Submitted Successfully", data: studentTask });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const submitSocialTask = async (req, res) => {
  try {
    const { description, shares, followers } = req.body;
    const studentId = req.user._id;

    const task = await AdminTask.findOne({});

    if (!task)
      return res.status(400).json({ error: "No Admin Task is present" });

    const taskId = task._id;

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
      studentName: req.user.name,
    });

    const findUser = await User.findById(req.user._id);

    await User.findByIdAndUpdate(findUser._id, {
      socialPoints: findUser.socialPoints + Number(shares) + Number(followers),
    });

    return res
      .status(200)
      .json({ message: "Task Submitted Successfully", data: socialTask });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const submitMasterclassTask = async (req, res) => {
  try {
    const { description, registrations } = req.body;
    const studentId = req.user._id;

    console.log(registrations);

    const task = await AdminTask.findOne({});

    if (!task)
      return res.status(400).json({ error: "No Admin Task is present" });

    const taskId = task._id;

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
      studentName: req.user.name,
    });

    const findUser = await User.findById(req.user._id);

    await User.findByIdAndUpdate(findUser._id, {
      masterclassPoints: findUser.masterclassPoints + Number(registrations),
    });

    return res
      .status(200)
      .json({ message: "Task Submitted Successfully", data: masterclassTask });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const submitWorkshopTask = async (req, res) => {
  try {
    const { description, organization } = req.body;
    const studentId = req.user._id;

    const task = await AdminTask.findOne({});

    if (!task)
      return res.status(400).json({ error: "No Admin Task is present" });

    const taskId = task._id;

    const findTask = await WorkshopTask.findOne({
      $and: [{ taskId }, { studentId }],
    });

    if (findTask) {
      return res.status(400).json({ error: "Task already submitted" });
    }

    const workshopTask = await WorkshopTask.create({
      taskId,
      description,
      organization,
      studentId,
      studentName: req.user.name,
    });

    console.log(workshopTask);

    const findUser = await User.findById(req.user._id);

    await User.findByIdAndUpdate(findUser._id, {
      workshopPoints: findUser.workshopPoints + 1,
    });

    return res
      .status(200)
      .json({ message: "Task Submitted Successfully", data: workshopTask });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const createAdminTask = async (req, res) => {
  const { title, description, date } = req.body;

  await AdminTask.deleteMany({});

  const adminTask = await AdminTask.create({
    title,
    description,
    date,
  });

  return res
    .status(200)
    .json({ message: "Task created successfully", data: adminTask });
};

export const getAdminTask = async (req, res) => {
  try {
    const adminTask = await AdminTask.findOne({});

    console.log(adminTask);

    if (!adminTask)
      return res
        .status(400)
        .json({ error: "No Admin task assigned right now" });

    return res.status(200).json({ data: adminTask });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const getStudentTasks = async (req, res) => {
  try {
    const tasks = await StudentTask.find();

    console.log(tasks);

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const getWorkshopTasks = async (req, res) => {
  try {
    const tasks = await WorkshopTask.find();

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const getSocialTasks = async (req, res) => {
  try {
    const tasks = await SocialTask.find();

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const getMasterclassTasks = async (req, res) => {
  try {
    const tasks = await MasterclassTask.find();

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};
