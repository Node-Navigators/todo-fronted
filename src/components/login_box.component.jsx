import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginBoxComponent = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      //dispatch action from hooks
    }
    alert("please provide a valid input");
  };

  const navigate = useNavigate();
  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      <div className=" w-3/4 h-3/4 flex flex-col justify-center items-center border-4 dark:border-gray-700 rounded-2xl p-20">
        <h1 className="text-4xl font-bold">Login</h1>
        <form onSubmit={handleSubmitEvent}>
          <input
            id="user-email"
            name="email"
            aria-describedby="user-email"
            aria-invalid="false"
            type="email"
            placeholder="email"
            className="w-full h-10 border border-gray-300 rounded-lg mt-5 px-3"
            onChange={handleInputChange}
          />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={handleInputChange}
            className="w-full h-10 border border-gray-300 rounded-lg mt-5 px-3"
          />
          <button className="w-full h-10 bg-blue-900 text-white rounded-lg mt-5">
            Login
          </button>
        </form>

        <button
          onClick={() => navigate("/register")}
          className="w-full h-10 bg-black dark:bg-white dark:text-black text-white rounded-lg mt-2"
        >
          register{" "}
        </button>
      </div>
    </div>
  );
};
