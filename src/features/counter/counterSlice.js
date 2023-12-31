import { createSlice } from '@reduxjs/toolkit'
import { userList } from './Data'


const initialState = {
  users : userList
}
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
     addUser:(state,action) =>
     {
       state.users = [...state.users,action.payload]
     },

     updateUser: (state, action) =>
     {
         //state.users = [...state.users,action.payload];
        // const {index,usersData}= action.payload;
        // const uu = state.find(user =>user.index == index)
        // if(uu)
        // {
        //   uu=usersData;
        // }
        
        state.users.map((el,index) =>
        {
          if (index === action.payload.index)
          {
            el.firstName = action.payload.firstName;
          }
        })
        //console.log('usrlist',userList)
        
     },
     deleteUser:(state,action)=>
     {
      
        // const {index} =action.payload;
        // const uu =state.find(user => user.index = index);
        // if(uu)
        // {
        //   return state.filter(f => f.index !== index)
        // }
        state.users = state.users.filter((user,index) => index !== action.payload.index);
        console.log('hello')
     },
  },
})


export const {addUser, updateUser, deleteUser}=userSlice.actions;
export default userSlice.reducer;