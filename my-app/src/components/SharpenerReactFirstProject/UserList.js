import React from "react";
import './UserForm.css';
const UserList=props=>{
return(
    <ul className="li">
        {props.users.map((user)=>(
            
            <li  key={user.id}>
                {user.name} ({user.age} Years Old);
            </li>
        ))}
    </ul>
);
};
export default UserList;