import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // return (
  // <div className="expense-item">
  // <ExpenseDate/>
  //     <div className="expense-item__description">
  //    <h2>{props.title}</h2>
  //     <div className="expense-item__price">${props.amount}</div>
  //     </div>
  //     <div className="location"><h2>{props.Location}</h2></div>
  // </div>
  // );
  // const [title,setTitle]=useState(props.title);
  // const [amount,setAmount]=useState(props.amount);
  // const deleteHandler=()=>{
  //   console.log("Deleted!!!");
  // };
  // const updateHandler=()=>{
  //   setAmount(100);
  //   console.log(amount);
  // }
  // const clickHandler = () => {
  //   setTitle("Updated!!");
  //  console.log(title);
  // };
  
  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      
      <ExpenseDetails title={props.title}
      amount={props.amount}
        location={props.location}/>
      {/* <button onClick={clickHandler}>ChangeTitle</button>
      <button onClick={deleteHandler}>DeleteExpense</button>
      <button onClick={updateHandler}>ChangeExpense</button> */}
    </Card>
   
  );
};
export default ExpenseItem;
