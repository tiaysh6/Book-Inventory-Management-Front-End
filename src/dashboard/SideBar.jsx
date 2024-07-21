import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg"
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    const from = "/";
    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            localStorage.setItem("isLoggedIn", false)
            alert('Signed-out successfully!');
            navigate(from, { replace: true })
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    // console.log(user)


    const { user } = useContext(AuthContext)
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="/" img={user?.photoURL} className='w-16 h-12'>
                <p>
                    {
                        user?.displayName || "Demo User"
                    }
                </p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>

                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Books
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>
                    {/* <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item> */}
                    <Sidebar.Item icon={HiTable}>
                        <button onClick={handleLogout}>Log Out</button>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar