import React, { useState } from 'react';

const AddTasks = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Details:', formData);
    // Handle form submission, e.g., send data to the server
    alert('User details submitted successfully!');
  };

  return (
    <div className="py-24 md:px-60 px-24 rounded-lg w-full text-center bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634]">
      <div className="w-full max-w-md  p-8 rounded-lg shadow-xl shadow-black">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#f5b041]">Add Tasks</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#f5b041] text-sm font-bold mb-2" htmlFor="Title">
              Title 
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#f5b041] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#f5b041] text-sm font-bold mb-2" htmlFor="TaskDescription">
              Task Description
            </label>
            <input
              type="text"
              id="TaskDescription"
              name="TaskDescription"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#f5b041] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#f5b041] text-sm font-bold mb-2" htmlFor="SubmissionDate">
              Submission Date
            </label>
            <input
              type="date"
              id="SubmissionDate"
              name="SubmissionDate"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#f5b041] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#f5b041] hover:bg-[#fcd595] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
