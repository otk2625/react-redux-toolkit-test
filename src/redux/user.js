import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {name: "홍길동", age: 0, email: "홍길동@gmail.com"};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => { //action ?
      state.value = action.payload;
    },
    logout : (state) => {
      console.log('state : :' , state);
      state.value = {
        name:"로그아웃", 
        age:0,
        email:""
      }
    }
  }
});

export const { login } = userSlice.actions;

export const { logout } = userSlice.actions;

export default userSlice.reducer;