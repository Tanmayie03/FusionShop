const Login = () => {
  return (
    <>
      <form className="flex flex-col mx-auto my-28 pb-8 bg-slate-50 w-[400px] rounded-md">
        <h1 className="px-6 py-4 mx-auto text-3xl text-center font-semibold text-white w-full rounded-t-md bg-slate-800 ">
          LOGIN
        </h1>
        <div className="flex mx-4 mt-8 flex-col">
          <label className="font-semibold text-slate-600">Email:</label>
          <input
            className="p-2  bg-white border-2 rounded outline-none"
            placeholder="email@gmail.com"
          />
        </div>
        <div className="flex mx-4 mt-4 flex-col">
          <label className="font-semibold text-slate-600">Password:</label>
          <input
            className="p-2  bg-white border-2 rounded outline-none"
            placeholder="Password123"
          />
        </div>
        <h1 className="p-4 mx-1 text-sm text-slate-400">
          Sign up with your credentials to get started{" "}
        </h1>
        <button className="py-2 px-4 mx-auto my-2 text-white rounded bg-slate-800 w-fit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
