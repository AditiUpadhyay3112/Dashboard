import React, { useState } from "react";
import { FaImage, FaUpload } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "axios";
import useSubmitStudentTask from "../../hooks/useSubmitStudentTask";

const Form2 = () => {
  const [file, setFile] = useState(null);
  const [taskDescription, setTaskDescription] = useState("");
  const [NameofOzrganization, setNameofOzrganization] = useState("");
  const { submitStudentTask, isSubmitting } = useSubmitStudentTask();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      description: taskDescription,
      organization: NameofOzrganization,
    };

    const taskDetail = { data, taskCategory: "workshop" };

    submitStudentTask(taskDetail);
  }

  const handleTaskChange = (e) => {
    setTaskDescription(e.target.value);
  };
  const handleNameofOzrganizationChange = (event) => {
    setNameofOzrganization(event.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <form
        className="p-10 rounded-lg w-full  bg-[#6c4869] shadow-2xl mt-14 shadow-black border border-[#ff9634]  "
        onSubmit={handleSubmit}
      >
        <div className="flex ">
          <div className="mb-6 w-1/2 mr-5">
            <label
              className="block text-[#f5b041] text-sm font-bold mb-2"
              htmlFor="taskDescription"
            >
              Task Description
            </label>
            <input
              type="text"
              id="taskDescription"
              className="shadow appearance-none bg-[#ffe5b2] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={taskDescription}
              onChange={handleTaskChange}
            />
          </div>
          <div className="mb-6 w-1/2">
            <label
              className="block text-[#f5b041] text-sm font-bold mb-2"
              htmlFor="NameofOzrganization"
            >
              Name of Organization
            </label>
            <input
              type="text"
              className="shadow appearance-none bg-[#ffe5b2] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={NameofOzrganization}
              onChange={handleNameofOzrganizationChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#f5b041] hover:bg-[#ffe5bc] text-white hover:text-[#ff6e51] font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <FaUpload className="h-5 w-5 inline-block mr-2" />
            Submit Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
