import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import { FiDownload } from "react-icons/fi";
import { api_base_url } from "../helper";

const EditorNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    const projId = location.pathname.split("/").pop(); // Extract project ID from the URL

    // Fetch project details by ID
    const fetchProjectDetails = async () => {
      const response = await fetch(api_base_url + "/getProject", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          projId: projId,
        }),
      });

      const data = await response.json();
      if (data.success && data.project) {
        setProjectTitle(data.project.title); // Set project title
        localStorage.setItem("projectTitle", data.project.title); // Store in localStorage
      } else {
        setProjectTitle("Untitled Project");
      }
    };

    fetchProjectDetails();
  }, [location.pathname]);

  return (
    <div className="EditiorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
      <div className="logo pt-[27px]">
        <img
        onClick={() => navigate("/")}
          className="w-[210px] h-[80px] cursor-pointer"
          src={logo}
          alt="Logo"
        />
      </div>
      <p>
        File / <span className="text-[gray]">{projectTitle}</span>
      </p>
      <i className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]">
        <FiDownload />
      </i>
    </div>
  );
};

export default EditorNavbar;
