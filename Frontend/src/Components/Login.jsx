import React, { useState } from "react";
import image from "../Images/img6.png";
import { IoIosArrowDroprightCircle, IoIosCloseCircle } from "react-icons/io";
import "../App.css";
import { useNavigate } from "react-router-dom";
import useLoginUser from "../hooks/useLoginUser";
import useLoginAdmin from "../hooks/useLoginAdmin";

const Login = ({ H1 }) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { loginStudent, isLogging } = useLoginUser();
  const { adminLogin } = useLoginAdmin();

  const handleLogin = () => {
    if (isAdminLogin) {
      console.log(userDetail);
      adminLogin(userDetail);
    } else {
      console.log(userDetail);
      loginStudent(userDetail);
    }
  };

 

  return (
    <>
      <section className="py-[50px] bg-gradient-to-r from-[#be38ac] via-[#894bbf] to-[#002a94] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000a0]"></div>
        <div className="container mx-auto flex z-50 relative px-2">
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
              <div className="absolute top-16 left-[417px] transform -translate-x-1/2 flex ">
                <button
                  onClick={() => setIsAdminLogin(false)}
                  className={`py-2 px-4 rounded-t-md ${
                    !isAdminLogin
                      ? "bg-[#ffa719] scale-125  text-white"
                      : " bg-transparent text-[#ffa71a] border border-[#ffa71a]"
                  }`}
                >
                  User Login
                </button>
                <button
                  onClick={() => setIsAdminLogin(true)}
                  className={`py-2 px-4 rounded-t-md ${
                    isAdminLogin
                      ? "bg-[#ffa719] scale-125  text-white"
                      : "bg-transparent text-[#ffa71a] border border-[#ffa71a]"
                  }`}
                >
                  Admin Login
                </button>
              </div>
              <input
                type="text"
                onChange={(e) =>
                  setUserDetail({ ...userDetail, username: e.target.value })
                }
                placeholder="Username"
                className={` absolute cursor-default md:top-48 top-20 z-50 rounded-md md:left-72 left-40 md:w-[40%] w-[30%] md:text-xl text-xs font-serif border-b-2 text-center border-b-[#ffa71a] bg-transparent placeholder:text-[#ffa71a] py-2 text-[#ffa71a] shadow-xl shadow-[#060606c2] ${
                  isAdminLogin
                    ? "bg-[#ffb13480] placeholder:text-white "
                    : "bg-transparent"
                } `}
              />
              <input
                type="password"
                onChange={(e) =>
                  setUserDetail({ ...userDetail, password: e.target.value })
                }
                placeholder="Password"
                className={`absolute cursor-default md:top-72 top-32 z-50 md:left-72 left-40 rounded-md md:w-[40%] w-[30%] md:text-xl text-xs font-serif border-b-2 text-center border-b-[#ffa71a] bg-transparent placeholder:text-[#ffa71a] py-2 text-[#ffa71a] shadow-xl shadow-[#060606c2]
                ${
                  isAdminLogin
                    ? "bg-[#ffb13480] placeholder:text-white "
                    : "bg-transparent"
                }`}
              />
              <div className="absolute md:top-96 top-44 md:left-[390px] left-44 text-[#ffa71a] hover:text-[#ff8555] cursor-pointer">
                <button onClick={handleLogin}>
                  {" "}
                  <IoIosArrowDroprightCircle size={60} />
                </button>
              </div>
           
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Login;
