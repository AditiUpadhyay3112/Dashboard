import React, { useState } from 'react';
import { FaCheckCircle, FaUpload, FaImage } from 'react-icons/fa';

function SubmitTask() {
  const [tasks, setTasks] = useState([
    'Math Homework - Complete chapter 5',
    'Science Project - Build a volcano model',
    'History Essay - Write about World War II',
  ]);

  const [file, setFile] = useState(null);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskOption, setTaskOption] = useState('');


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTaskChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription && file) {
      console.log('Task Description:', taskDescription);
      console.log('File:', file);
      alert('Task submitted!');
    } else {
      alert('Please enter a task description and upload an image.');
    }
  };

  // Function to handle changes to the selected option
  const handleTaskOptionChange = (event) => {
    setTaskOption(event.target.value);
  };


  return (
    <div className="min-h-screen font-serif  flex flex-col items-center p-2">
        <div className='p-10 rounded-lg w-full text-center bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634]'>

        <h1 className="text-6xl font-extrabold text-white mb-6">Weekly Tasks</h1>
      
      <ul className="list-disc mb-8 text-white text-lg space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center space-x-2">
            <FaCheckCircle className="h-6 w-6 text-green-400" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
        </div>
      

      <form
        className="p-10 rounded-lg w-full  bg-[#6c4869] shadow-2xl mt-14 shadow-black border border-[#ff9634]  "
        onSubmit={handleSubmit}
      >
        <div className='flex '>
        <div className="mb-6 w-1/2 mr-5">
  <label className="block text-[#f5b041] text-sm font-bold mb-2" htmlFor="taskDescription">
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
  <label className="block text-[#f5b041] text-sm font-bold mb-2" htmlFor="taskOption">
    Task Option
  </label>
  <select
    id="taskOption"
    className="shadow appearance-none bg-[#ffe5b2] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-600"
    value={taskOption}
    onChange={handleTaskOptionChange}
  >
    <option value="">Select Option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    <option value="option5">Option 5</option>
  </select>
</div>

        </div>
        <div className="mb-6">
          <label className="block  text-[#f5b041] text-sm font-bold mb-2" htmlFor="fileUpload">
            Upload Image
          </label>
          <div className="flex items-center">
            <input
              type="file"
              id="fileUpload"
              className="shadow bg-[#ffe5b2] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-600"
              onChange={handleFileChange}
            />
            <FaImage className="h-6 w-6 text-[#f5b041] ml-2" />
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
}

export default SubmitTask;
