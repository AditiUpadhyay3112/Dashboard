import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";
import useStudentTask from "../hooks/useStudentTask";
import useMasterclassTask from "../hooks/useMasterclassTask";
import useWorkshopTask from "../hooks/useWorkshopTask";
import useSocialTask from "../hooks/useSocialTask";

const ViewTasks = () => {
  const [openBox, setOpenBox] = useState(null);
  const [students, setStudents] = useState([
    { name: "aditi", studentsadded: 4, task: "asdfghj" },
  ]);
  const { studentTasks, loadingStudentTasks } = useStudentTask();
  const { masterclassTasks, loadingMasterclassTasks } = useMasterclassTask();
  const { workshopTasks, loadingWorkshopTasks } = useWorkshopTask();
  const { socialTasks, loadingSocialTasks } = useSocialTask();

  const toggleBox = (box) => {
    setOpenBox(openBox === box ? null : box);
  };
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  function showStudentTasks() {
    setStudents(studentTasks);
  }

  function showSocialTasks() {
    setStudents(socialTasks);
  }
  function showMasterclassTasks() {
    setStudents(masterclassTasks);
  }
  function showWorkshopTasks() {
    setStudents(workshopTasks);
  }

  if (
    loadingStudentTasks ||
    loadingMasterclassTasks ||
    loadingSocialTasks ||
    loadingWorkshopTasks
  )
    return null;

  return (
    <div className="py-24 md:px-10 px-14 rounded-lg w-full text-center bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634]">
      <div className="w-full max-w-6xl   p-8 rounded-lg shadow-xl shadow-black">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#f5b041]">
          View Tasks
        </h2>
        <div className="grid grid-cols-2 gap-12">
          <button
            className="px-6 py-10 border bg-[#f5b041] rounded-lg shadow-xl shadow-black "
            onClick={() => {
              showStudentTasks();
              toggleBox("studentAdded");
            }}
          >
            {" "}
            Students Added{" "}
          </button>
          <button
            className="px-6 py-10 border bg-[#f5b041] rounded-lg shadow-xl shadow-black "
            onClick={() => {
              toggleBox("workshop");
              showWorkshopTasks();
            }}
          >
            {" "}
            Workshop Organized{" "}
          </button>
          <button
            className="px-6 py-10 border bg-[#f5b041] rounded-lg shadow-xl shadow-black "
            onClick={() => {
              toggleBox("socialMedia");
              showSocialTasks();
            }}
          >
            {" "}
            Social Media{" "}
          </button>
          <button
            className="px-6 py-10 border bg-[#f5b041] rounded-lg shadow-xl shadow-black "
            onClick={() => {
              toggleBox("masterclass");
              showMasterclassTasks();
            }}
          >
            {" "}
            Masterclass{" "}
          </button>
        </div>
      </div>

      {openBox === "studentAdded" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-4/5 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <div className="grid grid-cols-4 justify-center gap-20">
              <h1 className="text-[#6c4869] font-semibold text-xl">S.No. </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Student Name
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                No. of Students Added{" "}
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Task Description{" "}
              </h1>
            </div>
            {students.map((user, Sno) => (
              <div
                key={Sno}
                className="grid grid-cols-4 mt-4  gap-20 justify-center border-b py-2 border-orange-300 "
              >
                <h1 className="text-[#6c4869]  text-xl">{Sno + 1}</h1>
                <h1 className="text-[#6c4869]  text-xl">{user.studentName}</h1>
                <h1 className="text-[#6c4869]  text-xl">{user.number}</h1>
                <h1 className="text-[#6c4869]  text-xl">{user.description}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {openBox === "workshop" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-4/5 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <div className="grid grid-cols-4 justify-center gap-20">
              <h1 className="text-[#6c4869] font-semibold text-xl">S.No. </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Student Name
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Name of Organization{" "}
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Task Description{" "}
              </h1>
            </div>
            {students.map((user, Sno) => (
              <div
                key={Sno}
                className="grid grid-cols-4 mt-4  gap-20 justify-center border-b py-2 border-orange-300"
              >
                <h1 className="text-[#6c4869] text-xl">{Sno + 1}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.studentName}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.organization}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.description}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {openBox === "socialMedia" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-4/5 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <div className="grid grid-cols-4 justify-center gap-20">
              <h1 className="text-[#6c4869] font-semibold text-xl">S.No. </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Student Name
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                No. of Shares{" "}
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                No. of Followers
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Task Description{" "}
              </h1>
            </div>
            {students.map((user, Sno) => (
              <div
                key={Sno}
                className="grid grid-cols-4 mt-4  gap-20 justify-center border-b py-2 border-orange-300"
              >
                <h1 className="text-[#6c4869] text-xl">{Sno + 1}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.studentName}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.shares}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.followers}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.description}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {openBox === "masterclass" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-4/5 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <div className="grid grid-cols-4 justify-center gap-20">
              <h1 className="text-[#6c4869] font-semibold text-xl">S.No. </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Student Name
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                No. of Registrations
              </h1>
              <h1 className="text-[#6c4869] font-semibold text-xl">
                Task Description{" "}
              </h1>
            </div>
            {students.map((user, Sno) => (
              <div
                key={Sno}
                className="grid grid-cols-4 mt-4  gap-20 justify-center border-b py-2 border-orange-300"
              >
                <h1 className="text-[#6c4869] text-xl">{Sno + 1}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.studentName}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.registrations}</h1>
                <h1 className="text-[#6c4869] text-xl">{user.description}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTasks;
