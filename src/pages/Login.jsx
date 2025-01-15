/* eslint-disable react/prop-types */
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const isAuth = useSelector((state) => state.login.isAuth)
  const navigate = useNavigate()
  //console.log(isAuth)
  useEffect(() => {
    let ignore = false;
    const checkUserLoggedIn = () => {
      if (isAuth) {
        if(!ignore) alert("User already logged in")
        navigate("/dashtab")
      }
    }
    if (!ignore) checkUserLoggedIn();
    return () => {
      ignore = true;
    };
  }, [])

  return (
    <div className="w-full h-screen grid-cols-3 grid">
      <Signin />
      <Signup />
    </div>
  )
}

export default Login


export function ErrorMessage({ title }) {
  return <p className="text-[#FF5A5F] text-sm mt-2">{title}</p>;
}