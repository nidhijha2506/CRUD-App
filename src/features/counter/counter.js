import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { addUser } from './counterSlice';
import { deleteUser } from './counterSlice';

// const getLocalDetails =()=>
// {
//     let stu_details = localStorage.getItem('details');
//     //console.log(stu_details);
//     if(stu_details)
//     {
//         return JSON.parse(localStorage.getItem('details'))
//     }
//     else{
//         return [];
//     }
// }



export function Counter() {
    const users = useSelector((state) => state.usersData.users)
    //console.log('users',users);
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputdata, setinputdata] = useState(users);
    const navigate = useNavigate()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (user) => {
        //console.log('user',user)

        // setinputdata([...inputdata, user]);
        // //inputdata.firstName=user.name;
        // reset();
        // handleClose();
        dispatch(addUser(user));
        reset();
        handleClose();
        
       
    }

    // useEffect(()=>
    // {
    //     //console.log('Before storing in local storage:', inputdata);
    //     localStorage.setItem('details',JSON.stringify(inputdata))
    //     //console.log('After storing in local storage:', inputdata);
    // }, [inputdata]);

    const handleDelete =(index,user)=>
  {
    console.log('index',index)
    const indexValue= index;
    const updatedUser = { ...user, index: +indexValue };
    dispatch(deleteUser(updatedUser));
       //dispatch(deleteUser({index:user.index}))
       
  }

   
  



    return (
        <div className="container pt-5">
            <h2>Crud App</h2>
            {/* <button className="btn btn-success my-3" onClick={() => dispatch()}>Create+</button> */}
            {/* <Link to='/create' className='btn btn-success my-3'>Create+</Link> */}
            <Button variant="primary" className="btn btn-success my-3" onClick={handleShow}>
                Create+
            </Button>

            <Modal show={show} onHide={handleClose} className='d-flex w-100 vh-100 
            justify-content-center align-items-center'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body className=' border bg-secondary text-white '>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-3'>
                        <label className="fw-bold mt-3 name-label">Full Name&nbsp;&nbsp;
                            <input 
                            className='input_name'
                            placeholder='Enter the name'
                            defaultValue=''  {...register("firstName", {
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
                             defaultValue=''  {...register("lastName", {
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
                            <input defaultValue='' 
                            className="email_input"
                            placeholder='Enter the email address'
                                {...register("email", {
                                    required: '*Email Address',
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Email is not valid' }
                                })}
                                aria-invalid={errors.email ? "true" : "false"} />
                            {errors.email && <h6 className="text-warning email-alert" role="alert">{errors.email.message}</h6>}
                        </label><br /><br />


                        <input className='btn btn-info submit-btn' type="submit" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button> */}
                </Modal.Footer>
            </Modal>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {inputdata?.map((user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${index}`} className='btn btn-sm btn-success'>Edit</Link>
                                <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))} */}

                   {users?.map((user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${index}`} className='btn btn-sm btn-success'>Edit</Link>
                                <button className='btn btn-sm btn-danger ms-2' onClick={()=> handleDelete(index,user)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );

}