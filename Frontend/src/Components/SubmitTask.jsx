import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";
import Form4 from "./Forms/Form4";
import axios from "axios";
import { toast } from "react-hot-toast";

function SubmitTask() {
  const [tasks, setTasks] = useState([
    "Math Homework - Complete chapter 5",
    "Science Project - Build a volcano model",
    "History Essay - Write about World War II",
  ]);

  const [file, setFile] = useState(null);
  const [taskDescription, setTaskDescription] = useState("");
  const [taskOption, setTaskOption] = useState("");
  const [adminTask, setAdminTask] = useState({
    title: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    const getAdminTask = async () => {
      try {
        const response = await axios.get("http://localhost:3000/task/admin", {
          withCredentials: true,
        });

        console.log(response);
        const { title, description, date } = response.data.data;

        setAdminTask({ title, description, date });
      } catch (error) {
        toast.error(error.response.data.error);
      }
    };

    getAdminTask();
  }, []);

  const [openBox, setOpenBox] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTaskChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleTaskOptionChange = (event) => {
    setTaskOption(event.target.value);
  };

  const toggleBox = (box) => {
    setOpenBox(openBox === box ? null : box);
  };

  return (
    <div className="min-h-screen font-serif flex flex-col items-center p-2">
      <div className="p-10 rounded-lg w-full text-center bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634]">
        <h1 className="text-6xl font-extrabold text-white mb-6">
          Weekly Tasks
        </h1>
        <ul className="list-disc mb-8 text-white text-lg space-y-2">
          {/* {tasks.map((task, index) => (
            <li key={index} className="flex items-center space-x-2">
              <FaCheckCircle className="h-6 w-6 text-green-400" />
              <span>{task}</span>
            </li>
          ))} */}
          <h1>{adminTask.title}</h1>
          <p>{adminTask.description}</p>
          <p>{adminTask.date}</p>
        </ul>
      </div>

      <div className="px-10 py-12 rounded-lg w-full  gap-6 grid grid-cols-2 bg-[#6c4869] shadow-2xl mt-6 shadow-black border border-[#ff9634]">
        <button
          className="border rounded-lg shadow-lg shadow-black px-4 py-8 border-black bg-[#ff9634]"
          onClick={() => toggleBox("studentAdded")}
        >
          Student Added 
        </button>
        <button
          className="border rounded-lg shadow-lg shadow-black px-4 py-8  border-black bg-[#ff9634]"
          onClick={() => toggleBox("workshop")}
        >
          Workshop Organized
        </button>
        <button
          className="border rounded-lg shadow-lg shadow-black px-4 py-8 border-black bg-[#ff9634]"
          onClick={() => toggleBox("socialMedia")}
        >
          Social Media
        </button>
        <button
          className="border rounded-lg shadow-lg shadow-black px-4 py-8 border-black bg-[#ff9634]"
          onClick={() => toggleBox("masterclass")}
        >
          Masterclass
        </button>
      </div>

      {openBox === "studentAdded" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <Form1 />
          </div>
        </div>
      )}

      {openBox === "workshop" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <Form2 />
          </div>
        </div>
      )}

      {openBox === "socialMedia" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <Form3 />
          </div>
        </div>
      )}

      {openBox === "masterclass" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpenBox(null)}
            >
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <Form4 />
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmitTask;
