import "./index.css";

function App() {
  return (
    <div>
      <div
        className="container-xl font-mono  bg-white flex-wrap flex p-6
     text-gray  md:text-sm font-bold justify-between align-center
     shrink  font-body 
     font-medium  xsml:p-6  "
      >
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="">
          <ul>
            <li>
              <a href="#" className="tracking-widested ">
                LIVE{" "}
                <span
                  className="hover:font-extrabold font-bold text-orange-500 text-normal hover:bg-orange-500
                  hover:rounded-full hover:p-1.5 hover:text-white transition ease-out duration-500"
                >
                  STRONG
                </span>
                .COM
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block" id="menu">
          <ul className="flex flex-1 gap-x-8 shrink tracking-wider">
            <li className="hover:text-white hover:p-1.5 hover:bg-orange-500 hover:rounded-full  hover:font-bold
            transition ease-out duration-700">
              <a href="#">EAT BETTER</a>
            </li>

            <li className="hover:shadow-inner hover:bg-red-400 hover:text-white
          hover:rounded-full  hover:p-1 transform hover:scale-125 transition ease-out duration 300
            hover:bg-opacity-50">
              <a href="#">GET FIT</a>
            </li>

            <li>
              <a href="#">STAY STRONG</a>
            </li>

            <li>
              <a href="#">LIVE WELL</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-4">
          <ul className="tracking-wider hidden lg:block ">
            <li className="  ">
              <a href="#">JOIN OUR NEWSLETTER</a>
            </li>
          </ul>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="container-xl  grid lg:grid-cols-2 w-full ">
        <div
          className="font-sans  w-full
      tracking-wider  bg-indigo-800 text-white 
      flex items-center justify-center flex-col gap-y-3.5 sm:py-28 lg:py-0 py-5
      xsml:py-16"
        >
          <h1 className="w-4/6  font-bold text-4xl">
            I Want to Manage My Weight
          </h1>
          <p className="w-4/6">
            Whether your aim is to reach or maintain a healthy weight, these
            evidence-based programs will help you achieve your goal.
          </p>
          {/* <div className=" bg-blue-400 font-bold rounded-full p-2 w-55 text-white">
        <p className="cc">25 MINS LONG VIDEO</p> 
      </div> */}
        </div>

        <div className="w-full">
          <img src="hulu/gr.jpg" alt="" />
        </div>
      </div>


      <div className="container-xl grid lg:grid-cols-3 gap-2 ">
        <div className="bg-purple-300  w-full  text-center  ">
          <img src="hulu/ds.jpeg" alt="" />
        </div>

        <div className="bg-red-300 w-full text-center ">
          {/* <img src="hulu/gr.jpeg" alt="" /> */}
        </div>

        <div className="bg-yellow-200 w-full text-center ">
          <img src="hulu/rail.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
