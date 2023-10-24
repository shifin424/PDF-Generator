import React from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import avatar from '../../assets/avatar.png'
import Swal from "sweetalert2";

const Navbar = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    Swal.fire({
      title: "Sign Out",
      text: "Are you sure you want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Sign Out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("UserJwtToken");
        navigate("/");
      }
    });
  };

  const userToken = localStorage.getItem("UserJwtToken");
  const avatarMenu = (
    <Menu>
      <Menu.Item
        key="signout"
        icon={<LogoutOutlined />}
        onClick={handleSignOut}
      >
        Sign Out
      </Menu.Item>
    </Menu>
  );

    return (
        <div>
        <nav className="bg-white bg-opacity-75 rounded-full ml-2 md:ml-10 mr-2 md:mr-10 mt-2 md:mt-6 shadow-md mb-2 md:mb-5">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
            <a href="" className="flex items-center">
              <img
                src={logo}
                className="h-8 w-8 md:h-12 md:w-12"
                alt="logo"
              />
              <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-black">
              DocuGenius
              </span>
            </a>
            <div className="flex md:order-2">
               {userToken ? (
              <Dropdown overlay={avatarMenu} trigger={["click"]}>
                <img className="w-8 h-8 md:w-10 md:h-10" src={avatar} alt="" />
              </Dropdown>
              ) : ( 
            <Link to={'/login'}><Button   onClick={handleNavigate} className="bg-red-400 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition w-full md:w-auto" text='login' /></Link>

               )} 
            </div>
          </div>
        </nav>
      </div>
      
    )
}

export default Navbar;