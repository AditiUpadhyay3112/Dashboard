import React, { useEffect, useState } from "react";
import img1 from "../Images/img7.png";
import Card4 from "./Cards/Card4";
import { CgProfile } from "react-icons/cg";
import SubmitTask from "./SubmitTask";
import axios from "axios";
import FeedbackForm from "./Forms/FeedbackForm";
import useCurrentStudent from "../hooks/useCurrentStudent";

const StudentPortal = () => {
  const [activeContent, setActiveContent] = useState("content1");
  const { student, isLoading } = useCurrentStudent();

  const renderContent = () => {
    switch (activeContent) {
      case "content1":
        return (
          <>
            <div className="rounded-lg h-[200px] md:h-[300px] grid items-center justify-center p-6 bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634] relative">
              <h1 className="text-4xl py-20 px-16 shadow-lg shadow-black rounded-lg font-bold text-white ">
                Student name
              </h1>
            </div>
            <div className="rounded-lg h-[200px] md:h-[300px] text-white bg-[#6c4869] border px-2 md:px-4 py-4 md:py-8 border-[#ff9634] shadow-2xl shadow-black">
              <div className="grid items-center font-serif justify-center py-8 font-bold rounded-lg shadow-lg shadow-black">
                <h1 className="text-center text-4xl">Total Points</h1>
                <h1 className=" text-center text-9xl">{student.totalPoints}</h1>
              </div>
            </div>
            <div className="rounded-lg col-span-2 bg-[#6c4869] border border-[#ff9634] px-4 md:px-6 py-4 md:py-6 shadow-2xl shadow-black">
              <table className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                <tr className="border-2 rounded-lg border-[#ff9634] grid grid-cols-1 mt-4 md:mt-0 px-4 md:px-6 py-4 md:py-6 shadow-xl shadow-black">
                  <th className="border rounded-lg border-[#ff9634] shadow-xl shadow-black md:h-16 h-20 text-base md:text-lg font-serif text-white flex items-center justify-center">
                    Students Added
                  </th>
                  <th className="text-5xl md:text-9xl rounded-lg shadow-xl shadow-black text-white font-serif flex items-center justify-center">
                    {student.studentPoints}
                  </th>
                </tr>
                <tr className="border-2 rounded-lg border-[#ff9634] mt-4 md:mt-0 md:ml-2 grid grid-cols-1 px-4 md:px-6 py-4 md:py-6 shadow-xl shadow-black">
                  <th className="border rounded-lg border-[#ff9634] shadow-xl shadow-black md:h-16 h-20 text-base md:text-lg font-serif text-white flex items-center justify-center">
                    Workshops Organised
                  </th>
                  <th className="text-5xl md:text-9xl rounded-lg shadow-xl shadow-black text-white font-serif flex items-center justify-center">
                    {student.workshopPoints}
                  </th>
                </tr>
                <tr className="border-2 rounded-lg border-[#ff9634] mt-4 md:mt-0 md:ml-2 grid grid-cols-1 px-4 md:px-6 py-4 md:py-6 shadow-xl shadow-black">
                  <th className="border rounded-lg border-[#ff9634] shadow-xl shadow-black md:h-16 h-20 text-base md:text-lg font-serif text-white flex items-center justify-center">
                    {student.socialPoints}
                  </th>
                  <th className="text-5xl md:text-9xl rounded-lg shadow-xl shadow-black text-white font-serif flex items-center justify-center">
                    3
                  </th>
                </tr>
                <tr className="border-2 rounded-lg border-[#ff9634] mt-4 md:mt-0 md:ml-2 grid grid-cols-1 px-4 md:px-6 py-4 md:py-6 shadow-xl shadow-black">
                  <th className="border rounded-lg border-[#ff9634] shadow-xl shadow-black md:h-16 h-20 text-base md:text-lg font-serif text-white flex items-center justify-center">
                    {student.masterclassPoints}
                  </th>
                  <th className="text-5xl md:text-9xl rounded-lg shadow-xl shadow-black text-white font-serif flex items-center justify-center">
                    4
                  </th>
                </tr>
              </table>
            </div>
          </>
        );
      case "content2":
        return (
          <div className="rounded-lg col-span-2 bg-[#6c486900]  ">
            <SubmitTask />
          </div>
        );
      case "content3":
        return (
          <div className="col-span-2 ">
            <h2 className="text-white text-lg md:text-xl font-serif">
              <FeedbackForm />
            </h2>
          </div>
        );

      default:
        return null;
    }
  };

  if (isLoading) return null;

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r py-10 from-[#be38ac] via-[#894bbf] to-[#002a94] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000a0]"></div>
      {/* Sidebar */}
      <div className="w-full md:w-1/5 z-50 bg-[#6c4869] border border-[#ff9634] rounded-b-xl md:rounded-r-xl md:rounded-b-none flex flex-col items-center py-6 px-4">
        <div className="w-16 h-16 z-50 bg-white rounded-full flex items-center justify-center mb-6">
          <CgProfile size={80} color="#f5b041" />
        </div>
        <div
          className="w-full h-40 "
          onClick={() => setActiveContent("content1")}
        >
          <Card4 H1={"Performance Review"} />
        </div>
        <div
          className="w-full h-40 mt-6"
          onClick={() => setActiveContent("content2")}
        >
          <Card4 H1={"Weekly Tasks"} />
        </div>
        <div
          className="w-full h-40 mt-6"
          onClick={() => setActiveContent("content3")}
        >
          <Card4 H1={"Feedback"} />
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full md:w-4/5 z-50 p-2 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentPortal;
