import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import LogIn from './LogIn'

const SignUp = () => {
 const [userSignUpData,setUserSignUpData] =useState({useremail:"",username:"",userpassword:""})
 const [isUserRegistered,setIsUserRegistered] = useState(false)
 const navigate = useNavigate()
 console.log(userSignUpData)
 const handleUserSignUp = async (userData) => {
    try {
      const response = await fetch("http://localhost:4000/signUp", {
        method: "POST", // Specify the HTTP method as POST
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON if sending JSON data
        },
        body: JSON.stringify(userData), // Convert userData to JSON and send it in the request body
      });
      const data = await response.json(); 
      if (data.message ==='User created successfully') {
        setIsUserRegistered(true)
        navigate("/LogIn")
        console.log("SignUp successful:", data);
      } else {
        setIsUserRegistered(false)
        // Request failed (status code is not 200)
        console.error("SignUp failed:", response.statusText);
      }
    } catch (error) {
      setIsUserRegistered(false)
      console.error("Error during SignUp:", error);
    }
  };
 
  return (
    <div className="p-6 min-h-screen flex justify-center items-center flex-col">
    {isUserRegistered === false ? (
      <div className="flex">
      <div>
      <p className="font-bold text-lg p-6 m-6">Let's get you registered</p>  
        <form onSubmit ={(event)=>{
            event.preventDefault();
            handleUserSignUp(userSignUpData)
        }
        }>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="font-bold text-xl shadow-slate-100 mr-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="border-purple-200 bg-purple-200 py-2 px-5 rounded-lg shadow-lg"
              onChange={(e)=>{setUserSignUpData({...userSignUpData,useremail:e.target.value})}}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="font-bold text-xl shadow-slate-100 mr-10"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter a unique username"
              className="border-purple-200 bg-purple-200 py-2 px-5 rounded-lg shadow-lg"
              onChange={(e)=>{setUserSignUpData({...userSignUpData,username:e.target.value})}}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="font-bold text-xl shadow-slate-100 mr-12"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter a password"
              className="border-purple-200 bg-purple-200 py-2 px-5 rounded-lg shadow-lg"
              onChange={(e)=>{setUserSignUpData({...userSignUpData,userpassword:e.target.value})}}
            />
          </div>
          <div className="flex justify-center p-5">
            <button
              className="border-purple-200 bg-pink-500 rounded-md shadow-lg py-2 px-5 mr-2"
            >
              Register
            </button>
            
          </div>
        </form>
      </div>
    <div className="font-bold text-xl items-center justify-center m-10 p-3">OR</div>
    <div className="m-6 p-6">
        <p className="font-bold text-lg">Already have an account?</p>
    <div className="m-10 p-2">
      <Link to="/LogIn" className="border-purple-200 bg-pink-500 rounded-md shadow-lg py-2 px-5 mr-2">
        Log In
      </Link>
    </div>
    </div>
    </div>) : <LogIn />}
    </div>
  );

};

export default SignUp;
