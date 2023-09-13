import React, { useState } from "react";
import "./UserForm.css";
import ErrorHandle from "./ErrorHandle";
const UserForm = (props) => {
  const [userId, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
const[error,setError]=useState();
  
const errorHandler=()=>{
  setError(null);
}
const setUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const setUserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userId.trim().length===0 || userAge.trim().length===0) {
      setError({
        title:'Invalid input',
        message:'Please Enter a valid name and age'
      });
      return;
    } 
    if(+userAge<1) {
      setError({
        title:'Invalid Age',
        message:'Please Enter a valid age(> 0)'
      });
      return;
    }
props.onSaveUser(userId,userAge);
    setUserName('');
    setUserAge('');
  };

  return (
    <div>
    {error && <ErrorHandle title={error.title} message={error.message} onCancel={errorHandler}/>}
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label className="label">UserName</label>
      </div>
      <div>
        <input type="text" className="text" value={userId} onChange={setUserNameHandler} />
      </div>

      <div>
        <label className="label">Age(Years)</label>
      </div>
      <div>
        <input type="number" className="text" value={userAge} onChange={setUserAgeHandler} />
      </div>
      <br />
      <div>
        <button type="submit" className="button" onClick={props.onClick}>
          Add User
        </button>
      </div>
    </form>
    </div>
  );
};
export default UserForm;
