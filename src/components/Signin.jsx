import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowRight } from "react-icons/fa";
import { ErrorMessage } from "../pages/Login";
import { Signinapi } from "../api/login";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/Login/LoginSlice";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [errors, setErrors] = useState({});
  const [pin, setPin] = useState("");
  const validatePhoneNumber = (phoneNumber) => {
    const countryPatterns = {
      IN: /^91\d{10}$/, // India: 91 followed by 10 digits
    };
    let tempErrors = {};
    // console.log(phoneNumber)
    for (const country in countryPatterns) {
      if (countryPatterns[country].test(phoneNumber)) {
        tempErrors = {};
        setErrors(tempErrors);
        return true;
      }
    }
    tempErrors.phoneNumber = "Invalid phone number";
    setErrors(tempErrors);
    return false;
  };
  const validateFormInfo = (pin) => {
    let tempErrors = {};
    if (!pin) {
      //will check for both signup and signin
      tempErrors.pin = "pin required";
    } else if (pin.length !== 6) {
      //will check for both signup and signin
      tempErrors.pin = "pin must be 6 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const dispatch=useDispatch();
 const navigate=useNavigate()
  const handleSubmit =async () => {
    if (validatePhoneNumber(phoneNumber) && validateFormInfo(pin)) {
      try {
        const response = await Signinapi(phoneNumber.slice(2, 12),pin);
        let tempErrors = {};
        if (Object.keys(tempErrors).length === 0) {
          setErrors({})
          setPhoneNumber("")
          setPin("")
          alert(response.data?.message)
          dispatch(
            setLogin({
              phoneNumber: phoneNumber.slice(2, 12),
              isAuth: true,
            }),
          );
          navigate("/dashtab")
          // console.log(response.data)
          // console.log(response?.data?.message)
        }
      } catch (error) {
        let tempErrors = {};
        //console.log(error)
        if (error.status != 200) {
          tempErrors.pin = error.response.data?.message
          setErrors(tempErrors);
        }
        //console.log(error)
      }
    }
  }

  return (
    <div className="col-span-1 flex flex-col justify-center items-center border-2 p-6 shadow-lg bg-[#EDE7F6]">
      <div className="w-[60%]">
        <img src="/LogoIcon.png" alt="Logo" className="w-[250px] h-[70px]" />
        <h2 className="text-3xl font-semibold text-[#333333] mt-4">Sign In</h2>
        <p className="text-[16px] font-normal text-[#555555] mb-4">Hi There!!   Welcome Back!!</p>
      </div>
      <div className="w-[60%]">
        <div className="m-2">
          <label
            htmlFor="phone"
            className="block text-base font-light text-gray-800 mb-1"
          >
            Phone Number
          </label>
          {/* Space added to have gap */}
          <PhoneInput
            id="phone"
            country={"in"}
            placeholder={`Choose country code`}
            value={phoneNumber}
            onChange={setPhoneNumber}
            onlyCountries={["in"]}
            countryCodeEditable={false}
            inputProps={{
              className:
                "border border-gray-300 rounded px-12 py-2 focus:outline-none",
              style: { height: "1 rem" },
            }}
          />
          {errors.phoneNumber && <ErrorMessage title={errors.phoneNumber} />}
        </div>
        <div className="m-2">
          <input
            className="border border-gray-300 rounded px-2 py-2 focus:outline-none"
            value={pin}
            maxLength="6"
            onChange={(e) => {
              const value = e.target.value;
              const regex = /^[0-9]*$/;
              if (regex.test(value)) {
                setPin(value);
              }
            }}
            placeholder="Pin"
          />
          {errors.pin && <ErrorMessage title={errors.pin} />}
        </div>
      </div>

      <div className="w-[40%] flex items-start m-4" onClick={() => handleSubmit()}>
        <button className="flex items-center justify-center w-[40%] rounded-[10px] border-2 border-transparent px-4 py-2 bg-[#6C5CE7] text-white hover:bg-[#5A4FC7] transition duration-200 ease-in-out">
          Submit
          <FaArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default Signin