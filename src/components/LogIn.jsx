import React, { useEffect, useState } from "react";
import TaskManagement from "./TaskManagement";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../utils/authSlice";

  const LogIn = () => {
    const [userLogInData, setUserLogInData] = useState({
      useremail: "",
      userpassword: "",
    });
    const [currentURL,setCurrentURL] = useState(window.location.href)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authData = useSelector((store)=>store.auth);
    const {isAuth} = authData;
    useEffect(()=>{
      if(currentURL === "http://localhost:3000/LogIn"){
        const updateIsAuth = false;
        dispatch(updateAuth({...authData,isAuth:updateIsAuth}))
      }
    },[currentURL])
  const handleUserLogIn = async (userLogInData) => {
    try {
      const response = await fetch("http://localhost:4000/logIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON if sending JSON data˳
        },
        body: JSON.stringify(userLogInData),
      });
      const resData = await response.json();
      if (resData.username && resData.useremail && resData.token) {
        // setIsUserLoggedIn(true);      
        navigate("/Task-management-screen/" + resData.id);
        dispatch(
          //dispatch update auth action if user is successfuly logged in.
          updateAuth({
            isAuth: true,
            authUser: {
              username: resData.username,
              useremail: resData.useremail,
              token: resData.token,
            },
          })
        );
      } else {
        throw new Error("User is unable to login with given credentials");
      }
    } catch (error) {
      console.log(error) ;
    }
  };
  return (
    <div className="p-6 min-h-screen flex justify-center items-center flex-col">
       {isAuth === false ? (<>
          <p className="font-bold text-lg p-6 m-6">You should login first!</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUserLogIn(userLogInData);
            }}
          >
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
                value={userLogInData.useremail}
                onChange={(e) =>
                  setUserLogInData({
                    ...userLogInData,
                    useremail: e.target.value,
                  })
                }
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
                value={userLogInData.userpassword}
                onChange={(e) =>
                  setUserLogInData({
                    ...userLogInData,
                    userpassword: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center p-5">
              <button
                className="border-purple-200 bg-pink-500 rounded-md shadow-lg py-2 px-5 mr-2"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </>) : <TaskManagement />}
    </div>
  );
};

export default LogIn;



/**
* if login done isAuth = true and we on /task
* if we move back make isAuth = false


*/