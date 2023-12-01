import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { userList } from './features/counter/Data';
import { updateUser } from './features/counter/counterSlice';

function Update() {

  

  const {index} = useParams();
  const users = useSelector((state) => state.usersData.users)
  //console.log("users",users);
  const existingUser = users?.filter((element,index) => index === index);
  //console.log('existinguser',existingUser)
  const usersData= existingUser[index];
  const [updatedata, setupdatedata]=useState({...usersData});
  const dispatch = useDispatch();
 const navigate = useNavigate();
 console.log('index is',index)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onUpdate = (user) => {
    console.log('index on update',index)
    console.log('submitdata',user);
    const indexValue= index;
    const updatedUser = { ...user, index: +indexValue };

    console.log('index on update', indexValue);
    console.log('submitdata', updatedUser);
    
    dispatch(updateUser(updatedUser));
    //setupdatedata([...userList, usersData]);
    // //inputdata.firstName=user.name;
    //console.log('newdata',user.firstName);
    //dispatch(updateUser(user));
  
    navigate('/');
    // reset();
     //handleClose();
    // dispatch(addUser(setinputdata([...inputdata,user])));
    // reset();
    // handleClose();


  } 
  
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3 className='text-center'>Update User</h3>
        <form onSubmit={handleSubmit(onUpdate)} className='editform'>
          <label className="fw-bold mt-3 name-label">Full Name&nbsp;&nbsp;
            <input
              className='input_name'
              placeholder='Enter the name'
              defaultValue={usersData.firstName}  {...register("firstName", {
                required: "*First name",
                maxLength: 20, pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "only starts with letter"
                }
              })}
              aria-invalid={errors.firstName ? "true" : "false"} />&nbsp;&nbsp;
            <input
              className='input_surname'
              placeholder='Enter the surname'
              defaultValue={usersData.lastName}  {...register("lastName", {
                required: '*Last name',
                maxLength: 20, pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "only starts with letter"
                }
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.firstName && <h6 className="text-warning firstname-alert"
              role="alert">{errors.firstName.message}</h6>}
            {errors.lastName && <h6 className="text-warning lastname-alert"
              role="alert">{errors.lastName.message}</h6>}
          </label><br /><br />
          <label className="fw-bold email-label">Email
            <input defaultValue={usersData.email}
              className="email_input"
              placeholder='Enter the email address'
              {...register("email", {
                required: '*Email Address',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Email is not valid' }
              })}
              aria-invalid={errors.email ? "true" : "false"} />
            {errors.email && <h6 className="text-warning email-alert" role="alert">{errors.email.message}</h6>}
          </label><br /><br />


          <button className="bg-success text-white  fs-5 w-25 rounded update_btn" >Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update;
