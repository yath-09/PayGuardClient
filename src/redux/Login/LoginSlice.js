import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: null,
  isAuth: false,
  isLoginPopupVisible: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.isAuth = action.payload.isAuth;
    },
    setLogout: (state) => {
      state.phoneNumber = null;
      state.isAuth = false;
    },
    setIsLoginPopupVisible: (state, action) => {
      state.isLoginPopupVisible = action.payload;
    },
  },
});

export const { setLogin, setLogout, setIsLoginPopupVisible} = loginSlice.actions;
export default loginSlice.reducer;
