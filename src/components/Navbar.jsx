import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

//react-icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [linkName, setLinkName] = useState('Login/Sign-Up');
  // const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    console.log(linkName)
  }, [linkName])

  const { user } = useContext(AuthContext);
  console.log(user);

  //toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      //   window.removeEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {

    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log("user is logged in");
      setLinkName("Library")
    } else {
      setLinkName("Login/Sign-Up")
    }
    // setNavItems(
    //   [
    //     { link: "Home", path: "/" },
    //     { link: "About", path: "/about" },
    //     { link: "Shop", path: "/shop" },
    //     // { link: "Categories", path: "/categories" },
    //     { link: "Library", path: `${localStorage.getItem("isLoggedIn") === true ? "/admin/dashboard/upload" : "login"}` },
    //     // { link: "Owned Books", path: "/ownedBooks" },
    //   ]
    // )
  }, []);




  // Nav Items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    // { link: "Categories", path: "/categories" },
    { link: `${localStorage.getItem("isLoggedIn") === "true" ? "Library" : "Login/Sign-Up"}`, path: `${localStorage.getItem("isLoggedIn") === "true" ? "/admin/dashboard/upload" : "login"}` },
    // { link: "Owned Books", path: "/ownedBooks" },
  ];


  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
          }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          {/*nav items for larger devices */}

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/*Btn for larger devices*/}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700 lg:invisible sm:visible" />
              {/* <FaUser />
              {

                user ? user.email : ""
              } */}

              {/* <div className="flex align-items:center ">
                <FaUser className="mr-6" />
                <span>{user ? user.email : ""}</span>
              </div> */}
            </button>
          </div>

          {/*menu btn for mob-devices*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black foucs:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark
                  cl
                  onClick={toggleMenu}
                  className="text-black foucs:outline-none h-5 w-5text-black"
                />
              ) : (
                <FaBarsStaggered className="h-5 w-5text-black" />
              )}
            </button>
          </div>
        </div>

        {/*navItems for sm devices*/}
        <div
          className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block-fixed top 0 right-0 left-0" : "hidden"
            }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={link}
              to={path}
              className="block text-base text-white uppercase cursor-pointer hover:text-blue-700"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
