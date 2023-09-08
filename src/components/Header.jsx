import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuth } from '../utils/authSlice';

const Header = () => {
  const authData = useSelector((store)=>store.auth)
  const dispatch = useDispatch()
//handle logout
const handleLogOut=()=>{
  const {isAuth} = authData
  dispatch(updateAuth({...authData,isAuth:false}))
}

  return (
    <div className="flex justify-between bg-purple-200 p-4">
      <div className='flex items-center'>
        <Link to ="LogIn"> 
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/bubbles/50/task.png"
          alt="task"
          className="mr-2"
        />
        </Link>
        <p className="font-bold text-2xl text-pink-500">TASK-IO</p>

      </div>
      {authData.isAuth ? <div className='flex items-center'>
      <div className="mr-4">
        <Link to="/Dashboard">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/glyph-neue/64/C850F2/dashboard.png"
            alt="dashboard"
          />
        </Link>
        <p className="mr-4">{authData.authUser.username}'s Dashboard</p>
        </div>
        <div className="mr-4">
          <button to href="/" onClick={(e)=>handleLogOut()}>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/fluency-systems-regular/48/C850F2/user--v1.png"
            alt="user--v1"
            className='mr-1'
          />
          </button> 
          <p className="mr-4">Logout</p>
        </div>
      </div>: null}
    </div>
  );
}

export default Header;
