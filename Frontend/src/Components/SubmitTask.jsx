import React, { useState } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';

function SubmitTask() {
  const [tasks, setTasks] = useState([
    'Math Homework - Complete chapter 5',
    'Science Project - Build a volcano model',
    'History Essay - Write about World War II',
  ]);

  const [file, setFile] = useState(null);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskOption, setTaskOption] = useState('');

  const [openBox, setOpenBox] = useState(null);

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

  const handleTaskOptionChange = (event) => {
    setTaskOption(event.target.value);
  };

  const toggleBox = (box) => {
    setOpenBox(openBox === box ? null : box);
  };

  return (
    <div className="min-h-screen font-serif flex flex-col items-center p-2">
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
      
      <div className='p-10 rounded-lg w-full bg-[#6c4869] shadow-2xl mt-14 shadow-black border border-[#ff9634]'>
        <button className='border ml-4 p-4 border-black bg-[#ff9634]' onClick={() => toggleBox('studentAdded')}>
          Student Added
        </button>
        <button className='border p-4 ml-4 border-black bg-[#ff9634]' onClick={() => toggleBox('workshop')}>
          Workshop Organized
        </button>
        <button className='border p-4 ml-4 border-black bg-[#ff9634]' onClick={() => toggleBox('socialMedia')}>
          Social Media
        </button>
        <button className='border p-4 ml-4 border-black bg-[#ff9634]' onClick={() => toggleBox('masterclass')}>
          Masterclass
        </button>
      </div>

      {openBox === 'studentAdded' && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl'>
            <button className='absolute top-2 right-2' onClick={() => setOpenBox(null)}>
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <Form1/>
          </div>
        </div>
      )}

      {openBox === 'workshop' && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl'>
            <button className='absolute top-2 right-2' onClick={() => setOpenBox(null)}>
              <FaTimes className="h-6 w-6 text-black" />
            </button>
          <Form2/>
          </div>
        </div>
      )}

      {openBox === 'socialMedia' && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl'>
            <button className='absolute top-2 right-2' onClick={() => setOpenBox(null)}>
              <FaTimes className="h-6 w-6 text-black" />
            </button>
            <Form3/>
          </div>
        </div>
      )}

      {openBox === 'masterclass' && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='relative p-10 rounded-lg w-1/2 bg-[#ffeedf] shadow-2xl'>
            <button className='absolute top-2 right-2' onClick={() => setOpenBox(null)}>
              <FaTimes className="h-6 w-6 text-black" />
            </button>
         <Form4/>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmitTask;
