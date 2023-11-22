import React from "react";
import {useSelector} from 'react-redux';

function Home()
{
    const users= useSelector((state)=> state.users)
    console.log(users);
    return(
        <div className="container">
            <h2>Crud App</h2>
            <button className="btn btn-success my-3">Create+</button>
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

                </tbody>
            </table>
        </div>
    );
}

export default Home;