import { createSlice } from '@reduxjs/toolkit'
import { userList } from './Data'



export const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
     addUser:(state,action) =>
     {
       console.log(action);
       state.push(action.payload)
     }
  }
})


export const {addUser}=userSlice.actions;
export default userSlice.reducer;