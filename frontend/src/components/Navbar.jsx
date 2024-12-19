const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-12 py-1 bg-slate-100 font-poppins ">
        <div className="flex">
          <img src="./images/cartify.png" className="w-12 mt-1" />
        </div>
        <div className="flex p-2 font-semibold  gap-x-10 text-slate-800">
          <h1 className="py-1 border-b-2 border-transparent cursor-pointer hover:border-slate-800 ">
            Men
          </h1>
          <h1 className="py-1 border-b-2 border-transparent cursor-pointer hover:border-slate-800">
            Women
          </h1>
          <h1 className="py-1 border-b-2 border-transparent cursor-pointer hover:border-slate-800">
            Jewellery
          </h1>
          <h1 className="py-1 border-b-2 border-transparent cursor-pointer hover:border-slate-800">
            Electronics
          </h1>
          <h1 className="py-1 border-b-2 border-transparent cursor-pointer hover:border-slate-800">
            Collection
          </h1>
        </div>
        <div className="flex h-10 mt-1 ">
          <svg
            className="w-12 px-3 text-blue-700 bg-white border-y border-slate-200 rounded-l-md"
            viewBox="0 0 20 20">
            <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
          </svg>
          <input
            placeholder="Search "
            className="px-4 bg-white outline-none border-y w-32 lg:w-[400px] border-slate-200 rounded-r-md"
          />
        </div>
        <div className="hidden lg:block">
          <div className="flex  lg:items-end">
            <div className="flex flex-col items-center ">
              <p className="absolute top-0 px-1 text-[10px] bg-red-600 rounded-full text-white right-[185px]">
                10
              </p>
              <svg className="w-7" viewBox="0 0 20 18">
                <path
                  fill="black"
                  d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                <path
                  fill="black"
                  d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                <path
                  fill="black"
                  d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
              <h1 className="mx-4 text-[13px] font-semibold">Cart</h1>
            </div>

            <div className="flex flex-col items-center">
              <svg className="w-6" viewBox="0 0 20 20">
                <path
                  fill="black"
                  d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
              </svg>
              <h1 className="mx-4 text-[13px] font-semibold">Wishlist</h1>
            </div>

            <button className="flex flex-col items-center justify-center ml-4 ">
              <svg className="w-6 " viewBox="0 0 20 20">
                <path
                  fill="black"
                  d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                <path
                  fill="black"
                  d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
              </svg>
              <h1 className=" text-[13px] font-semibold">Profile</h1>
              <div className="hidden">
                <div className="absolute right-0 z-50 flex flex-col w-64 py-3 text-lg text-left bg-white border border-gray-300 rounded-b-xl top-16 ">
                  <h1 className="px-2 text-sm font-semibold">Welcome!</h1>
                  <h1 className="px-2 text-sm">
                    {" "}
                    To access account and manage orders
                  </h1>
                  <h1 className="px-6 py-2 mt-2 font-bold text-blue-600 border-y hover:bg-gray-100">
                    Sign in / Login
                  </h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">My Profile</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Order</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Wishlist</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Rewards</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Gift Card</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Contact Us</h1>
                </div>
              </div>
            </button>
          </div>
        </div>
        <button className="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 "
            width="100"
            height="80"
            viewBox="0 0 100 80">
            <rect width="100" height="10" rx="5" fill="#333" />
            <rect y="35" width="100" height="10" rx="5" fill="#333" />
            <rect y="70" width="100" height="10" rx="5" fill="#333" />
          </svg>
          <div className="relative">
            <div className="absolute top-0 right-0 z-50 flex flex-col p-2 bg-white  lg:bg-none lg:items-end">
              <div className="flex flex-col items-center py-2 ">
                <p className="absolute top-0 px-1 text-[10px] bg-red-600 rounded-full text-white left-8">
                  .
                </p>
                <svg className="w-7" viewBox="0 0 20 20">
                  <path
                    fill="black"
                    d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                  <path
                    fill="black"
                    d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  <path
                    fill="black"
                    d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
                <h1 className="mx-4 text-[13px] font-semibold">Cart</h1>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-6" viewBox="0 0 20 20">
                  <path
                    fill="black"
                    d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
                </svg>
                <h1 className="mx-4 text-[13px] font-semibold">Wishlist</h1>
              </div>

              <button className="flex flex-col items-center justify-center ml-4 ">
                <svg className="w-6 " viewBox="0 0 20 20">
                  <path
                    fill="black"
                    d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                  <path
                    fill="black"
                    d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                </svg>
                <h1 className=" text-[13px] font-semibold">Profile</h1>
                <div className="absolute right-0 z-50 flex flex-col w-64 py-3 text-lg text-left bg-white border border-gray-300 rounded-b-xl top-16 ">
                  <h1 className="px-2 text-sm font-semibold">Welcome!</h1>
                  <h1 className="px-2 text-sm">
                    {" "}
                    To access account and manage orders
                  </h1>
                  <h1 className="px-6 py-2 mt-2 font-bold text-blue-600 border-y hover:bg-gray-100">
                    Sign in / Login
                  </h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">My Profile</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Order</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Wishlist</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Rewards</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Gift Card</h1>
                  <h1 className="px-6 py-2 hover:bg-gray-100">Contact Us</h1>
                </div>
              </button>
            </div>
          </div>
        </button>
      </div>
      {/* <div className="flex justify-between ">
        <div className="flex p-2 text-sm text-white  gap-x-6 bg-slate-800">
          <h1 className="py-1 border-b-2 border-transparent hover:border-white ">
            Men
          </h1>
          <h1 className="py-1 border-b-2 border-transparent hover:border-white">
            Women
          </h1>
          <h1 className="py-1 border-b-2 border-transparent hover:border-white">
            Jewellery
          </h1>
          <h1 className="py-1 border-b-2 border-transparent hover:border-white">
            Electronics
          </h1>
        </div>
        <div className="">
          <h1 className="py-1 border-b-2 border-transparent hover:border-white">
            Electronics
          </h1>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
