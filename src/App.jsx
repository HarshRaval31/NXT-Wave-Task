import { useState } from 'react';
import './App.css'
import MainRouts from './Routs/MainRouts'
import { Link, useNavigate } from 'react-router-dom';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  var navigate = useNavigate()

  function handelLogout() {
    localStorage.removeItem("isLogin")
    localStorage.removeItem("isUser")
    localStorage.removeItem("isUserEmail")
    navigate('/login')
  }


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <div className=" mmm w-[100%]  h-auto flex relative">

        <div
          id="sidebars"
          className={`h-auto sm:w-[100%]  absolute lg:static transition-all duration-500 ease-in-out ${isOpen ? 'lg:w-[15%] w-[60%] sm:right-[100%] lg:right-[0]' : 'lg:w-[4%] xl:ps-[4%] xl:w-[7%] w-0  ms-[-50px] sm:w-[350px]'
            }`}
        >

          {isOpen ? <div id="toggle_div" className={`  ${isOpen ? "block" : "hidden"}     `}     >


            <Link to={'/'}>
              <div id="Logo" className="w-[100%] h-[80px]  flex justify-center items-center">
                <h1 className="text-[25px] font-[600]">
                <i class="fa-brands fa-slack"></i> Harsh
                </h1>
              </div>

            </Link>
            {isOpen && (
              <button
                id="bt"
                className="lg:absolute top-[0] sm:hidden absolute left-[80%] lg:left-[10%]"
                onClick={toggleSidebar}
              >
                ❌
              </button>
            )}

            {!isOpen && (
              <button
                id="bt"
                className="sm:absolute lg:left-[-95%] absolute lg:hidden top-[0] right-[0]"
                onClick={toggleSidebar}
              >
                ❌
              </button>
            )}
            <Link to={'/'}>
              <div className="w-[100%] h-[50px] mt-[30px] ps-[5%] pe-[5%] flex justify-between items-center" id="register">
                <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i class="fa-solid fa-house-user text-[24px]"></i>
                </div>
                <div className="w-[60%] h-[100%] flex justify-center items-center">
                  <p>Dashboard</p>
                </div>
                <div className="w-[20%] h-[100%]"></div>
              </div>
            </Link>

            <Link to={'/login'}>
              <div className="w-[100%] h-[50px] mt-[7px] ps-[5%] pe-[5%] flex justify-between items-center" id="Items">
                <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i class="fa-solid fa-user-check text-[24px]"></i>
                </div>
                <div className="w-[60%] h-[100%] flex justify-center items-center">
                  <p>Login</p>
                </div>
                <div className="w-[20%] h-[100%]"></div>
              </div>
            </Link>
            <Link to={'/product'}>
              <div className="w-[100%] h-[50px] mt-[7px] ps-[5%] pe-[5%] flex justify-between items-center" id="Items">
                <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i class="fa-solid fa-inbox text-[24px]"></i>
                </div>
                <div className="w-[60%] h-[100%] flex justify-center items-center">
                  <p>Product</p>
                </div>
                <div className="w-[20%] h-[100%]"></div>
              </div>
            </Link>

            <Link to={'/user'}>
              <div className="w-[100%] h-[50px] mt-[7px] ps-[5%] pe-[5%] flex justify-between items-center" id="Items">
                <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i class="fa-solid fa-address-card text-[24px]"></i>
                </div>
                <div className="w-[60%] h-[100%] flex justify-center items-center">
                  <p>user</p>
                </div>
                <div className="w-[20%] h-[100%]"></div>
              </div>
            </Link>
          </div> : <div id="minidiv">


            <button
              id="bt"
              className="sm:absolute lg:left-[-95%] absolute lg:hidden top-[0] right-[0]"
              onClick={toggleSidebar}
            >
              ❌
            </button>
            <Link to={'/'}>

              <div id="Logo" className="w-[100%] h-[80px] flex  justify-center items-center">
              <i class="fa-brands fa-slack text-[24px]"></i>
              </div>
            </Link>

            <div id="Dashbb" className="w-[100%] h-[80px] flex   justify-center items-center">
              <Link to={'/'}>

                <i className="fa-solid fa-house-chimney text-[24px]"></i>

              </Link>
            </div>

            <div id="Registerr" className="w-[100%] h-[80px] flex  justify-center items-center">
              <Link to={'/login'}>

                <i className="fa-solid fa-address-card text-[24px]"></i>
              </Link>

            </div>


            <div id="Itemss" className="w-[100%] h-[80px] flex   justify-center items-center">
              <Link to={'/user'}>
                <i className="fa-solid fa-user text-[24px]"></i>
              </Link>
            </div>

            <div id="Userss" className="w-[100%] h-[80px] flex  justify-center items-center">
              <Link to={'/product'}>
                <i className="fa-solid fa-cart-shopping text-[24px]"></i>
              </Link>


            </div>




          </div>
          }


        </div>


        <div
          id="div"
          className={`h-[100vh] overflow-auto scroll-smooth transition-all duration-500 ease-in-out ${isOpen ? 'lg:w-[100%] w-[100%]' : 'w-[100%]'}`}
        >


          <div id="Navbar" className="w-[100%] h-[80px] ">

            <div className='w-[100%] h-[75px] ] border-gray-400 flex justify-between items-center '>

              <button id="bt" onClick={toggleSidebar} className=" h-[100%] ms-[20px] flex justify-between items-center ">

                <i class="fa-solid fa-bars text-[30px] cursor-pointer "></i>
              </button>

              <div className='w-[35%]md:w-[50%]  h-[auto]  sm:block  hidden  '>
                <h1 id='H1' className='text-[4vw] sm:text-[3vw] md:text-[2.3vw] lg:text-[2vw]'>Welcome {localStorage.getItem("isUser") ? localStorage.getItem("isUser") : "User"} <i id='icon1' class="fa-solid fa-hand"></i></h1>
                <p id='P1' className='text-[2vw] sm:text-[1.7vw] md:text-[1.7vw] lg:text-[1.6w]  hidden  md:block xl:text-[1.4vw]'>Here’s what’s happening with your store today.</p>
              </div>

              <div className='flex w-[85%] sm:w-[50%] h-[70%] lg:w-[60%] h-[70%] lg:justify-end  items-center justify-evenly '>
                <div className='w-[70%] sm:w-[40%] h-[100%]   flex items-center justify-evenly'>

                  <i class="fa-solid fa-magnifying-glass text-[15px]"></i>
                  <input className='w-[70%] h-[30px]  sm:w-[90%] sm:ms-[5px]  lg:h-[35px] lg:w-[300px] text-[1.3vw] border-1 border-gray-400 rounded-[12px] ps-[10px] bg-[white]' type="text" placeholder='Search' /> </div>

                <div className='flex items-center w-[120px] lg:w-[125px] xl:w-[200px]  hidden '>
                  <i id='icon2' class="  hidden ms-2 lg:ms-0 text-center fa-regular fa-star md:text-[2vw]  lg:text-[1.6vw] lg: text-[2.4vw]"></i>
                  <i id='icon2' class="  hidden ms-2 lg:ms-4 lg:pt-[0.5vw] pt-[1vw] text-center fa-solid fa-moon md:text-[2vw]"></i>
                  <i id='icon2' class="  hidden ms-2 lg:ms-4 lg:pt-[0.5vw] pt-[1vw] text-center fa-solid fa-bell md:text-[2vw]"></i>
                </div>

                <div className='flex h-[100%]  justify-center items-center' >

                  <div className='ms-[4vw] hidden sm:block w-[40px] h-[80%]  rounded-[50%] bg-[darkslategray] lg:flex items-center justify-center' > {localStorage.getItem("isUser") ? localStorage.getItem("isUserEmail") : "🧑‍💻"} </div>
                  <div className=' w-[60px]  hidden h-[70%]  bg-[darkslategray] text-[white] rounded-[10%] sm:flex justify-center items-center ms-[10px] '>
                    {localStorage.getItem("isUser") ? localStorage.getItem("isUser") : "User"}

                  </div>
                  <Link >

                    <button onClick={handelLogout} className='cursor-pointer border-2 text-[14px]  rounded-[20px]  border-[black] w-[100px]  h-[30px] ms-[10px]  ' id=''>LOGOUT <i class="fa-solid fa-right-from-bracket ms-2"></i></button></Link>
                </div>

              </div>
            </div>

          </div>

          <div className='scroll-smooth h-[91.5vh]  overflow-auto  ' id='bg' >

            <MainRouts />

          </div>

        </div>
      </div>

    </>
  )
}

export default App
