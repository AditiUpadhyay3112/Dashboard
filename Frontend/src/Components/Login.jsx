import React, { useState } from "react";
import image from "../Images/img6.png";
import { IoIosArrowDroprightCircle, IoIosCloseCircle } from "react-icons/io";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoAlertCircleOutline } from "react-icons/io5";
import gif from "../Images/gif.gif";
import { toast } from "react-hot-toast";
import axios from "axios";

const Login = ({ H1 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        userDetail,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data.user));
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const handleForgotPasswordClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-[50px] bg-gradient-to-r from-[#be38ac] via-[#894bbf] to-[#002a94] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000a0]"></div>
        <div className="container mx-auto flex z-50 relative px-4">
          <div className="md:w-[80%] md:h-[500px] w-[80%] h-[250px] relative md:ml-28 ml-10 shadow-2xl shadow-black bg-[#ededed48] md:rounded rounded-tr-3xl">
            <h1 className="md:text-sm md:w-[10%] w-[15%] text-[8px] absolute top-10 md:left-6 left-4 tracking-widest font-serif text-[#f6cf95]">
              {" "}
              {H1}
            </h1>
            <img
              src={image}
              alt=""
              className="absolute left-10 bottom-1 w-[55%] z-50"
            />
            <div className="w-[65%] h-[250px] md:h-[500px] bg-[#f4e7d6] absolute right-0 md:rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl md:rounded-tl-3xl md:rounded shadow-2xl shadow-black">
              <h1 className="absolute md:top-10 top-4 md:left-[330px] left-[134px] md:text-4xl text-xl font-extrabold shadow-xl shadow-[#060606c2] rounded-md md:px-4 px-8 md:py-4 py-2 tracking-widest font-serif text-[#ffa719]">
                LOGIN
              </h1>
              <input
                type="text"
                onChange={(e) =>
                  setUserDetail({ ...userDetail, username: e.target.value })
                }
                placeholder="Username"
                className="absolute cursor-default md:top-48 top-20 z-50 rounded-md md:left-72 left-40 md:w-[40%] w-[30%] md:text-xl text-xs font-serif border-b-2 text-center border-b-[#ffa71a] bg-transparent placeholder:text-[#ffa71a] py-2 text-[#ffa71a] shadow-xl shadow-[#060606c2]"
              />
              <input
                type="password"
                onChange={(e) =>
                  setUserDetail({ ...userDetail, password: e.target.value })
                }
                placeholder="Password"
                className="absolute cursor-default md:top-72 top-32 z-50 md:left-72 left-40 rounded-md md:w-[40%] w-[30%] md:text-xl text-xs font-serif border-b-2 text-center border-b-[#ffa71a] bg-transparent placeholder:text-[#ffa71a] py-2 text-[#ffa71a] shadow-xl shadow-[#060606c2]"
              />
              <div className="absolute md:top-96 top-44 md:left-[390px] left-44 text-[#ffa71a] hover:text-[#ff8555] cursor-pointer">
                <button onClick={handleLogin}>
                  {" "}
                  <IoIosArrowDroprightCircle size={60} />
                </button>
              </div>
              <h1
                className="absolute font-serif text-[#ffa71a] md:text-xs text-[7px] md:bottom-4 bottom-2 md:right-8 right-4 font-bold hover:underline-offset-2 cursor-pointer hover:underline"
                onClick={handleForgotPasswordClick}
              >
                FORGOT PASSWORD?
              </h1>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#6d5575]  shadow-black rounded-lg py-20 px-20 border border-[#ffa71a] shadow-xl w-[90%] md:w-[50%] relative">
            <button
              className="absolute top-2 right-2 text-black hover:scale-95 "
              onClick={handleCloseModal}
            >
              <IoIosCloseCircle size={30} color="white" />
            </button>
            <div className="">
              <IoAlertCircleOutline
                size={80}
                color="white"
                style={{ marginLeft: "195px" }}
              />
              <h2 className="text-xl text-center text-white font-serif font-bold mb-4">
                Reset Password
              </h2>
            </div>
            <img
              src={gif}
              alt=""
              className="absolute  opacity-30  -z-0 right-14 top-20 "
            />

            <form>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full  p-2 mb-4 border rounded-md shadow-xl shadow-black "
              />
              <button
                type="submit"
                className="w-full bg-[#ffa71a]  duration-700  hover:bg-[#ffc05a] shadow-xl  shadow-black text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
