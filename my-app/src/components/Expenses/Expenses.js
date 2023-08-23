import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
// import ExpenseDetails from "./ExpenseDetails";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'


  const Expenses=(props)=>{
    const[filteredYear,setFilteredYear]=useState('2020');
  
    const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
   };
   
   const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
   })

    return (
      <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {
        filteredExpenses.map((ele)=>{
      return (
      <ExpenseItem 
      key={ele.id}
      title={ele.title}
       amount={ele.amount}  
       location={ele.location}
       date={ele.date}></ExpenseItem>   
       );
        })
        }
        </Card>
        </div>
        );       
       }
       export default Expenses;