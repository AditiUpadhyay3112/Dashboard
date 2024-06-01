import React, { useEffect, useState } from "react";
import Card4 from "./Cards/Card4";
import { CgLogOut, CgProfile } from "react-icons/cg";
import AddUser from "./Forms/AddUser";
import AddTasks from "./Forms/AddTasks";
import ViewTasks from "./ViewTask";
import ViewFeedback from "./ViewFeedback";
import useCurrentAdmin from "../hooks/useCurrentAdmin";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  const [activeContent, setActiveContent] = useState("content1");
  const { admin, loadingAdmin } = useCurrentAdmin();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!loadingAdmin && !admin) {
        navigate("/login");
      }
    },
    [admin, loadingAdmin, navigate]
  );

  const renderContent = () => {
    switch (activeContent) {
      case "content1":
        return (
          <div className="  col-span-2 ">
            <AddUser />
          </div>
        );
      case "content2":
        return (
          <div className=" col-span-2   ">
            <AddTasks />
          </div>
        );
      case "content3":
        return (
          <div className=" col-span-2 ">
            <ViewTasks />
          </div>
        );
      case "content4":
        return (
          <div className="col-span-2  ">
            <h2 className="text-white text-lg md:text-xl  font-serif">
              <ViewFeedback />
            </h2>
          </div>
        );

      default:
        return null;
    }
  };

  if (loadingAdmin) return null;

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r py-10 from-[#be38ac] via-[#894bbf] to-[#002a94] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000a0]"></div>
      <div className="w-full md:w-1/5 z-50  bg-[#6c4869] border border-[#ff9634] rounded-b-xl md:rounded-r-xl md:rounded-b-none flex flex-col items-center py-6 px-4">
        <div className="w-16 h-16 z-50 bg-white rounded-full flex items-center justify-center mb-6">
          <CgProfile size={80} color="#f5b041" />
        </div>
        <div
          className="w-full h-28 "
          onClick={() => setActiveContent("content1")}
        >
          <Card4 H1={"Add Student"} />
        </div>
        <div
          className="w-full h-28 mt-6"
          onClick={() => setActiveContent("content2")}
        >
          <Card4 H1={"Add Tasks"} />
        </div>
        <div
          className="w-full h-28 mt-6"
          onClick={() => setActiveContent("content3")}
        >
          <Card4 H1={"View Tasks"} />
        </div>
        <div
          className="w-full h-28 mt-6"
          onClick={() => setActiveContent("content4")}
        >
          <Card4 H1={"Feedbacks"} />
        </div>
        <div className="mt-6 text-white font-bold hover:scale-105 ">
          <CgLogOut size={40}/> Logout
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-4/5 z-50 p-2 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPortal;
