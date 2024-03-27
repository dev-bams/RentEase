import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://rentease-b5mm.onrender.com/login", { email, password })
      // .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Success") {
          // Assuming the response contains user data including account type
          const userType = result.data.accountType;
          if (userType === "Homeowner") {
            navigate("/sellerpage"); // Direct to homeowner page
          } else {
            navigate("/listings"); // Direct to listings page
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center items-center pb-12">
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-wrap-reverse items-center"
        >
          <div className="flex flex-col items-center gap-8 grow basis-96">
            <div className="w-full flex flex-col gap-7 items-center justify-center ">
              <h2 className="font-bold text-3xl text-center">
                Login to your{" "}
                <span className="text-first-primary">Rentease</span> Account
              </h2>
              <input
                className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
                type="email"
                placeholder="Email Address"
                autoComplete="off"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-first-primary hover:bg-first-primary-light transition-all duration-150 p-3 text-white font-bold rounded-md w-full"
            >
              Login
            </button>
            <p>
              {"Don't Have an Account Yet?"}
              <Link
                to="/signup"
                className="bg-first-green p-4 tex font-bold rounded-md"
              >
                Sign Up Here
              </Link>
            </p>
          </div>
          <div className="basis-96 grow">
            <img src={loginImage} alt="signup" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
