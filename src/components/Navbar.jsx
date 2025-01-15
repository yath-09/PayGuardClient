import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutApi } from "../api/login";
import { setLogin } from "../redux/Login/LoginSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the phone number from the Redux state
  const phoneNumber = useSelector((state) => state.login.phoneNumber);

  const handleLogout = async () => {
    try {
      const response = await LogoutApi();
      //console.log(response.data.message)
      dispatch(
        setLogin({
          phoneNumber:null,
          isAuth: false,
        }),
      ); // Dispatch a logout action (you can customize this)
      alert(response.data.message)
      navigate("/user/login"); // Navigate to the login page
    } catch (error) {
      console.log(error)
      alert('Somthinng went wrong')
      //alert(error.response.data.message)
    }

  };

  return (
    <div className="w-full p-4 flex items-center justify-between border-b-2 bg-white shadow-md">
      <img src="/LogoIcon.png" alt="PayGuard" className="w-[150px]" />

      <div className="absolute right-0 mt-2 text-black border rounded-md shadow-lg mr-4">
        <button
          onClick={handleLogout}
          className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
