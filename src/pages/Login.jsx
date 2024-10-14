import Signup from "../components/Signup";
import Signin from "../components/Signin";
const Login = () => {


  return (
    <div className="w-full h-screen grid-cols-3 grid">
        <Signin/>
        <Signup/>
    </div>
  )
}

export default Login


export function ErrorMessage({ title }) {
  return <p className="text-[#FF5A5F] text-sm mt-2">{title}</p>;
}