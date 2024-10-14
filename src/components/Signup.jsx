import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowRight } from "react-icons/fa";
import { ErrorMessage } from "../pages/Login";


const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [errors, setErrors] = useState({});
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
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

  const handleSubmit = () => {
    if (validatePhoneNumber(phoneNumber)) {
      console.log("submit")
    }
  }
  return (
    <div className="col-span-2 flex flex-col justify-center items-center border-2 p-6 shadow-lg bg-[#EDE7F6]">
      <div className="w-[60%]">
        <img src="/LogoIcon.png" alt="Logo" className="w-[250px] h-[70px]" />
        <h2 className="text-3xl font-semibold text-[#333333] mt-4">Sign Up</h2>
        <p className="text-[16px] font-normal text-[#555555] mb-4">Enter Your Details!</p>
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
          <label
            htmlFor="pin"
            className="block text-base font-light text-gray-800 mb-1"
          >
            Pin
          </label>
          <input
            className="border border-gray-300 rounded px-2 py-2 focus:outline-none"
            value={pin}
            onChange={setPin}
            placeholder="Pin"
          />
          {errors.pin && <ErrorMessage title={errors.pin} />}
        </div>
        <div className="m-2">
          <label
            htmlFor="pin"
            className="block text-base font-light text-gray-800 mb-1"
          >
            Name
          </label>
          <input
            className="border border-gray-300 rounded px-2 py-2 focus:outline-none"
            value={name}
            onChange={setName}
            placeholder="Name"
          />
          {errors.name && <ErrorMessage title={errors.name} />}
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

export default Signup