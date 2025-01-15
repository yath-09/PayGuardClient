/* eslint-disable no-useless-catch */
import axios from "axios";
import { BASE_URL } from "../../helpers/constants";

export const Signupapi = async (phoneNumber, userName, pin) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/signup`,
      JSON.stringify({
        phoneNumber,
        pin,
        userName,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // This enables sending credentials with the request
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};


export const Signinapi = async (phoneNumber,pin) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/signin`,
      JSON.stringify({
        phoneNumber,
        pin,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // This enables sending credentials with the request
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const LogoutApi = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/logout`,
      JSON.stringify({}),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // This enables sending credentials with the request
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};