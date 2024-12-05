import { Link, NavLink } from "react-router-dom";
import brandImg from "../../assets/imgs/freshcart-logo.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../../Context/User.context";
import { cartContext } from "../../Context/Cart.context";

  import person from "../../assets/imgs/person.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  let { token, Logout } = useContext(userContext);
  let { cartData ,GetProductFormCart ,wishCart } = useContext(cartContext);
  console.log(cartData);
  


  
 
  

  useEffect(() => {
    GetProductFormCart();
  }, []);


  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    dropdownRef.current.classList.toggle('hidden');
  };

  
  return (
    <>
      <header className=" z-30 fixed flex flex-wrap shadow-md sm:justify-start sm:flex-nowrap w-full bg-gray-200 text-sm py-3 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full  mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center  justify-between">
            <Link
              className="flex-none text-xl font-bold dark:text-white focus:outline-none focus:opacity-80"
              to="/home"
              aria-label="Brand"
            >
              <img src={brandImg} alt="Brand Logo" />
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                id="hs-navbar-example-collapse"
                aria-expanded={isOpen}
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} shrink-0 size-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} shrink-0 size-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div
            id="hs-navbar-example"
            className={` transition-all duration-500 ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } sm:max-h-full sm:opacity-100 sm:block`}
          >
            <div className="flex flex-col md:py-2 gap-4 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:gap-6">
              {/* Navbar Links */}
              {token && (
                <ul className="flex flex-col me-16  gap-4   max-w-min sm:flex-row sm:gap-6">
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `font-medium relative text-black dark:text-white focus:outline-none  hover:before:w-full hover:before:transition-all hover:before:duration-500 before:absolute before:left-0 before:bg-primary-500 before:h-0.5 before:w-0 before:-bottom-2 ${
                          isActive ? "before:!w-full text-primary-800 dark:text-primary-800 font-extrabold" : ""
                        }`;
                      }}
                      to="/home"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `font-medium relative text-black dark:text-white focus:outline-none  hover:before:w-full hover:before:transition-all hover:before:duration-500 before:absolute   before:bg-primary-500 before:h-0.5 before:w-0 before:-bottom-2 ${
                          isActive ? "before:!w-full text-primary-800 dark:text-primary-800 font-extrabold" : ""
                        }`;
                      }}
                      to="/allproducts"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `font-medium relative text-black dark:text-white focus:outline-none  hover:before:w-full hover:before:transition-all hover:before:duration-500 before:absolute   before:bg-primary-500 before:h-0.5 before:w-0 before:-bottom-2 ${
                          isActive ? "before:!w-full text-primary-800 dark:text-primary-800 font-extrabold" : ""
                        }`;
                      }}
                      to="/category"
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `font-medium relative text-black dark:text-white focus:outline-none  hover:before:w-full hover:before:transition-[width] hover:before:duration-500 before:absolute  before:left-0 before:bg-primary-500 before:h-0.5 before:w-0 before:-bottom-2 ${
                          isActive ? "before:!w-full text-primary-800 dark:text-primary-800 font-extrabold" : ""
                        }`;
                      }}
                      to="/brands"
                    >
                      Brands
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `font-medium relative text-black dark:text-white focus:outline-none  hover:before:w-full hover:before:transition-[width] hover:before:duration-500 before:absolute  before:left-0 before:bg-primary-500 before:h-0.5 before:w-0 before:-bottom-2 ${
                          isActive ? "before:!w-full text-primary-800 dark:text-primary-800 font-extrabold" : ""
                        }`;
                      }}
                      to="/allorders"
                    >
                      Orders
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* Social Links */}
              <ul className="flex  gap-4   sm:flex-row sm:gap-6">
               
             
              {/* wish list */}
                {token && (
                  <Link to="/wish" className="relative">
                    <i className="fa-regular fa-heart cursor-pointer text-2xl text-primary-800"></i>
                    <span
                      className="absolute size-4 rounded-full bg-primary-200 text-black  flex justify-center items-center 
                                top-[-8px] right-[-8px] 
                                sm:top-2 sm:-right-96 
                                md:-right-1 md:-top-2"
                    >
                     {wishCart === null ? 0  : wishCart.count}
                    </span>
                  </Link>
                )}

                {/* cart shopping icon */}
                {token && (
                  <Link to="/cart" className="relative">
                    <i className="fa-solid fa-cart-shopping cursor-pointer text-2xl text-primary-800"></i>
                    <span
                      className="absolute size-4 rounded-full bg-primary-200 text-black flex justify-center items-center 
                                top-[-8px] right-[-8px] 
                                sm:top-2 sm:-right-96 
                                md:-right-1 md:-top-2"
                    >
                      {cartData === null ? 0 : cartData.numOfCartItems}
                    </span>
                  </Link>
                )}

                {/* scoial media */}
                <li>
                  <i className="fa-brands text-md cursor-pointer text-blue-500 fa-facebook"></i>
                </li>
                <li>
                  <i className="fa-brands text-md cursor-pointer text-blue-500 fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands text-md cursor-pointer text-pink-500 fa-instagram"></i>
                </li>
                <li>
                  <i className="fa-brands text-md cursor-pointer text-blue-500 fa-linkedin"></i>
                </li>
                <li>
                  <i className="fa-brands text-md cursor-pointer text-red-600 fa-youtube"></i>
                </li>
              </ul>

              {/* Dark Mode Toggle */}

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:hidden inline-flex items-center gap-x-2 py-2 px-3 bg-primary-300 rounded-full text-sm font-semibold text-white hover:bg-primary-400 focus:outline-none"
                  onClick={() => {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                  Dark
                </button>

                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:inline-flex hidden items-center gap-x-2 py-2 px-3 bg-primary-300 rounded-full text-sm font-semibold text-white hover:bg-primary-400 focus:outline-none"
                  onClick={() => {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  Light
                </button>
              </div>

              {/* Dark Mode Toggle */}

              {!token && (
                <ul className="flex  gap-4  sm:flex-row sm:gap-6">
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `font-medium relative text-black dark:text-white focus:outline-none  hover:before:w-full hover:before:transition-all hover:before:duration-500 before:absolute   before:bg-primary-500 before:h-0.5 before:w-0 before:-bottom-2 ${
                          isActive ? "before:!w-full font-semibold" : ""
                        }`;
                      }}
                      to="/login"
                    >
                      Log in
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `font-medium relative text-black dark:text-white focus:outline-none  hover:before:w-full hover:before:transition-all hover:before:duration-500 before:absolute  before:left-0 before:bg-primary-500 before:h-0.5 before:w-0 before:-bottom-2 ${
                          isActive ? "before:!w-full font-semibold" : ""
                        }`;
                      }}
                      to="/signup"
                    >
                      Sign up
                    </NavLink>
                  </li>
                </ul>
              )}


              {/* log out */}
              {token && (
       <div className="flex md:order-2  relative">
       {/* Avatar Button */}
       <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
         <img
           src={person}
           alt="User settings"
           className="w-10 h-10 rounded-full cursor-pointer"
         />
       </button>
 
       {/* Dropdown Menu */}
       <ul
         ref={dropdownRef}
         className="hidden text-center absolute z-50  top-10 md:right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg"
       >
         <li className="px-4 py-4 text-sm text-gray-700">
           <p className="block text-primary-500 pb-1  ">  {localStorage.getItem("userName")}</p>
           <hr className="border-t w-full mb-2 border-gray-200" />
  
           <p className="block truncate font-medium text-gray-500">{`${localStorage.getItem("userEmail")}`}</p>
         </li>
         {/* <hr className="border-t border-gray-200" /> */}
  
 
   
         <hr className="border-t border-gray-200" />
         <li onClick={Logout}>
           <button className="w-full text-center px-4 py-2 text-sm text-red-600 hover:bg-red-100">
             Sign out
           </button>
         </li>
       </ul>
 
   
     </div>
              )}



  

 

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

