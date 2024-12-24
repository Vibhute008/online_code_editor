import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { MdLightMode } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { api_base_url, toggleClass } from "../helper";

const Navbar = ({ isGridLayout, setIsGridLayout }) => {
  const [data, setData] = useState(null);
  const [lightMode, setLightMode] = useState(false);

  const changeTheme = () => {
    const navbar = document.querySelector(".navbar");
    if (lightMode) {
      navbar.style.background = "#141414";
      navbar.style.color = "#ffffff";
      document.body.classList.remove("lightMode");
      setLightMode(false);
    } else {
      navbar.style.background = "#f4f4f4";
      navbar.style.color = "#000";
      document.body.classList.add("lightMode");
      setLightMode(true);
    }
  };

  useEffect(() => {
    fetch(api_base_url + "/getUserDetails", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.user);
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full h-[80px] z-50 flex items-center justify-between px-[100px] bg-[#141414] text-white shadow-md">
      <div className="logo pt-[27px]">
        <img
          onClick={() => navigate("/")}
          className="w-[210px] h-[80px] cursor-pointer"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="links flex items-center gap-6 text-lg font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `menu relative ${isActive ? "active-link" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `menu relative ${isActive ? "active-link" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `menu relative ${isActive ? "active-link" : ""}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `menu relative ${isActive ? "active-link" : ""}`
          }
        >
          Services
        </NavLink>
        <button
          onClick={logout}
          className="btnBlue bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
        <Avatar
          onClick={() => toggleClass(".dropDownNavbar", "hidden")}
          name={data ? data.name : ""}
          size="40"
          round="50%"
          className="cursor-pointer"
        />
      </div>
      <div className="dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#1A1919] w-[150px] h-[160px]">
        <div className="py-[10px] border-b-[1px] border-b-[#fff]">
          <h3 className="text-[17px]" style={{ lineHeight: 1 }}>
            {data ? data.name : ""}
          </h3>
        </div>
        <i
          className="flex items-center gap-2 mt-3 mb-2 cursor-pointer"
          onClick={changeTheme}
          style={{ fontStyle: "normal" }}
        >
          {" "}
          <MdLightMode className="text-[20px]" /> Light mode
        </i>
        <i
          onClick={() => setIsGridLayout(!isGridLayout)}
          className="flex items-center gap-2 mt-3 mb-2 cursor-pointer"
          style={{ fontStyle: "normal" }}
        >
          <BsGridFill className="text-[20px]" />{" "}
          {isGridLayout ? "List" : "Grid"} layout
        </i>
      </div>
    </div>
  );
};

export default Navbar;
