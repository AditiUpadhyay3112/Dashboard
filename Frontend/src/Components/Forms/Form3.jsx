import React, { useState } from "react";
import { FaImage, FaUpload } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "axios";

const Form3 = () => {
  const [file, setFile] = useState(null);
  const [taskDescription, setTaskDescription] = useState("");
  const [NumberofShares, setNumberofShares] = useState("");
  const [NumberofFollowers, setNumberofFollowers] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        description: taskDescription,
        shares: NumberofShares,
        followers: NumberofFollowers,
      };

      const response = await axios.post(
        "http://localhost:3000/task/social",
        data,
        { withCredentials: true }
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  const handleTaskChange = (e) => {
    setTaskDescription(e.target.value);
  };
  const handleNumberofSharesChange = (event) => {
    setNumberofShares(event.target.value);
  };
  const handleNumberofFollowers = (event) => {
    setNumberofFollowers(event.target.value);
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
          <div className="mb-6 w-1/3 ">
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
          <div className="mb-6 w-1/3 ml-2">
            <label
              className="block text-[#f5b041] text-sm font-bold mb-2"
              htmlFor="NumberofShares"
            >
              Number of Shares
            </label>
            <input
              type="text"
              className="shadow appearance-none bg-[#ffe5b2] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={NumberofShares}
              onChange={handleNumberofSharesChange}
            />
          </div>
          <div className="mb-6 w-1/3 ml-2">
            <label
              className="block text-[#f5b041] text-sm font-bold mb-2"
              htmlFor="NumberofFollowers"
            >
              Number of Followers
            </label>
            <input
              type="text"
              className="shadow appearance-none bg-[#ffe5b2] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={NumberofFollowers}
              onChange={handleNumberofFollowers}
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

export default Form3;
