import React, { useEffect, useState } from "react";
import img from "../../Images/upflairs white logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { IoLogOutOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/currentUser",
          { withCredentials: true }
        );
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.reload();
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="md:py-[20px] py-[10px] bg-gradient-to-r from-[#be38ac] via-[#894bbf] to-[#002a94] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000a0]"></div>
        <div className="container mx-auto flex z-50 relative px-4">
          <div className="md:w-40 w-28 ml-4 py-2 md:ml-3">
            <img src={img} alt="" />
          </div>
          <div className="absolute md:top-6 top-4 left-40 md:left-60">
            <ul className="flex text-white font-serif font-semibold md:text-2xl text-lg justify-center">
              <NavLink>
                <li className="mx-4 hover:text-[#f6cf95]">Home</li>
              </NavLink>
              <NavLink>
                <li className="mx-4 hover:text-[#f6cf95]">Review</li>
              </NavLink>
              <NavLink>
                <li className="mx-4 hover:text-[#f6cf95]">Tasks</li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li className="mx-4 hover:text-[#f6cf95]">Feedback</li>
              </NavLink>
            </ul>
          </div>
          <div className="absolute flex items-center gap-[1rem] right-10  top-0 mt-[10px] md:mt-[20px]">
            <NavLink
              to={"/sportal"}
              className="flex items-center text-white font-serif font-semibold md:text-2xl text-lg hover:text-[#f6cf95]"
            >
              {user && <span className="mr-2">{user.name}</span>}
              <CgProfile size={40} />
            </NavLink>
            <IoLogOutOutline
              onClick={handleLogout}
              className="text-white w-[3rem] h-[3rem] cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
